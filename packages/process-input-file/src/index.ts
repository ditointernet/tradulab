import * as fs from 'fs';
import * as jsonstream from 'jsonstream';

import { mongo } from './config';

import { File, Phrase } from './models';
import { IPhrase } from './models/phrase';

function start() {
  console.info('🚀: microservice started');

  const parser = jsonstream.parse([true, { emitKey: true }], function (row) {
    console.log('map:', row);
    return row;
  });

  parser.on('data', (...args) => console.log('log: ', ...args));
  parser.on('header', (...args) => console.log('header: ', ...args));
  parser.on('footer', (...args) => console.log('footer: ', ...args));
  parser.on('end', (...args) => console.log('end: ', ...args));
  parser.on('exit', (...args) => console.log('exit: ', ...args));
  parser.on('error', (...args) => console.log('error: ', ...args));

  fs.createReadStream('./dashboard.json')
    .pipe(parser)
    .on('error', (...args) => console.log('error: ', ...args));

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

async function bulkCreatePhrases(fileId: string, phrases: IPhrase[]) {
  const session = await mongo.startSession();
  session.startTransaction();

  try {
    await Promise.all(
      phrases.map((phrase) =>
        Phrase.updateOne(
          { key: phrase.key },
          { $set: phrase },
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
