import { ApolloError } from 'apollo-server-express';

import Phrase from './model';
import { model as File, constants as FileConstants } from '../file';
import TradulabError from '../../errors';
interface ICreatePhraseArgs {
  fileId: string;
  text: string;
}

async function createPhrase(_, args: ICreatePhraseArgs) {
  const { fileId, text } = args;

  const file = await File.findById(fileId);

  if (!file) throw new TradulabError(FileConstants.ERROR_CODES.FILE_NOT_FOUND);

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
