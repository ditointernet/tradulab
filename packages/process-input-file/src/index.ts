import * as fs from 'fs';
import { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamObject } from 'stream-json/streamers/StreamObject';
import { batch } from 'stream-json/utils/Batch';

import { mongo } from './config';

import { File, Phrase } from './models';

type Pair = { key: string; value: string };

async function start() {
  console.info('🚀: microservice started');

  const unprocessedFiles = await getUnprocessedFiles();

  // mongoose: fazer um loop de busca no banco por files não processados
  for (const file of unprocessedFiles) {
    console.time('processFile');

    try {
      // alternar entre métodos de processamento baseado na extensão
      switch (file.extension) {
        case 'json': {
          // mongoose: pegar o caminho do file no sistema
          // stream-json: ler o file gradualmente
          const pipeline = chain([
            fs.createReadStream(file.filePath),
            parser(),
            streamObject(),
            batch({ batchSize: 200 }),
            async function (pairArr: Pair[]) {
              // mongoose: criar phrases a partir dos conteudos do arquivo
              await bulkCreatePhrases(file.id, pairArr);
              return null;
            },
          ]);

          await new Promise((resolve) =>
            pipeline
              .on('data', () => null)
              .on('end', resolve)
              .on('error', (err) => {
                throw err;
              })
          );
          break;
        }
        default:
          break;
      }

      // mongoose: atualizar o documento do file indicando que foi processado
      await updateProcessedFile(file.id);
    } catch (err) {
      console.error(err);
      await updateFailedFile(file.id);
    } finally {
      console.timeEnd('processFile');
    }
  }
}

function getUnprocessedFiles() {
  return File.find({ processedStatus: 'pending' });
}

function updateProcessedFile(fileId: string) {
  return File.updateOne(
    { _id: fileId },
    { $set: { processedStatus: 'done', processedAt: new Date() } }
  );
}

function updateFailedFile(fileId: string) {
  return File.updateOne(
    { _id: fileId },
    { $set: { processedStatus: 'failed', processedAt: null } }
  );
}

async function bulkCreatePhrases(fileId: string, phrases: Pair[]) {
  const session = await mongo.startSession();
  session.startTransaction();

  try {
    await Promise.all(
      phrases.map((phrase) =>
        Phrase.updateOne(
          { key: phrase.key },
          { $set: { key: phrase.key, text: phrase.value, file: fileId } },
          { upsert: true, session }
        )
      )
    );

    await session.commitTransaction();
  } catch (err) {
    console.error(err);
    await session.abortTransaction();
    await updateFailedFile(fileId);
  } finally {
    session.endSession();
  }
}

start();
