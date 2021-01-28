import * as fs from 'fs';
import { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamObject } from 'stream-json/streamers/StreamObject';
import { batch } from 'stream-json/utils/Batch';

import { mongo } from './config';

import { File, Phrase } from './models';

type Pair = { key: string; value: string };

function start() {
  console.info('🚀: microservice started');

  console.time('processFile');

  const pipeline = chain([
    fs.createReadStream('./dashboard.pt_BR.json'),
    parser(),
    streamObject(),
    batch({ batchSize: 500 }),
  ]);

  const fileId = '6012ac2013f28e2ccc96a1f6';

  pipeline
    .on('data', async (pairArr: Pair[]) => {
      await bulkCreatePhrases(fileId, pairArr);
    })
    .on('error', (...args) => {
      console.timeEnd('processFile');
      console.log('error', ...args);
    })
    .on('end', (...args) => {
      console.timeEnd('processFile');
      console.log('end: ', ...args);
    });

  // mongoose:   fazer um loop de busca no banco por files não processados
  // mongoose:   pegar o caminho do file no sistema
  // alternar entre métodos de processamento baseado na extensão
  // jsonstream: ler o file gradualmente
  // mongoose:   criar phrases a partir dos conteudos do arquivo
  // mongoose:   atualizar o documento do file indicando que foi processado
}

function getUnprocessedFiles() {
  return File.find({ processedStatus: 'pending' });
}

function updateProcessedFile(fileId: string) {
  return File.updateOne(
    { id: fileId },
    { $set: { processedStatus: 'done', processedAt: new Date() } }
  );
}

function updateFailedFile(fileId: string) {
  return File.updateOne(
    { id: fileId },
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
