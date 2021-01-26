import { ApolloError } from 'apollo-server-express';

import { ERROR_CODES } from './constants';
import Phrase from './model';
import { model as File } from '../file';
import TradulabError from '../../errors';
interface ICreatePhraseArgs {
  fileId: string;
  text: string;
}

async function createPhrase(_, args: ICreatePhraseArgs) {
  const { fileId, text } = args;

  const file = await File.findById(fileId);

  if (!file) throw new TradulabError(ERROR_CODES.FILE_NOT_EXIST);

  const phrase = new Phrase({
    file: fileId,
    text,
  });

  try {
    await phrase.save();

    return phrase;
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
}

export const mutations = { createPhrase };
