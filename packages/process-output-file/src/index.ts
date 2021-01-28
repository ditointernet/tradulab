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

  /** Premissas
   * Para cada idioma distinto que houver uma suggestion daquele file:
   *  1. Arquivo input e output tenham todas as mesmas keys
   *  2. Usar suggestions aprovadas primeiro
   *  3. Usar suggestions highest score
   *  4. Usar undefined ou null ou string vazia como última opção
   *  5. Atualizar os documentos de stats com o caminho do arquivo output da linguagem
   *
   * // languages distintas pra um determinado file id
   * Pra cada language:
   * 1. Buscar as phrases daquela language (gradualmente);
   * 2. Para aquele bulk de phrases, buscar as suggestions aprovadas, do idioma, do arquivo
   * 3. Para as phrases ainda sem suggestion aprovada, buscar as suggestions highest score
   * 4. Preencher os vazios
   * 4. Criar o arquivo e salvar no results
   */
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
