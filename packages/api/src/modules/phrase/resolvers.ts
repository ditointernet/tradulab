import { ApolloError } from 'apollo-server-express';
import { Types } from 'mongoose';

import Phrase from './model';
import { model as File, constants as fileConstants } from '../file';
import TradulabError from '../../errors';

interface ICreatePhraseArgs {
  fileId: string;
  text: string;
}

async function createPhrase(_, args: ICreatePhraseArgs) {
  const { fileId, text } = args;

  const file = await File.findById(fileId);

  if (!file) throw new TradulabError(fileConstants.ERROR_CODES.FILE_NOT_FOUND);

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

interface IListPhrasesArgs {
  projectId: Types.ObjectId;
  fileId: Types.ObjectId;
}

async function listPhrases(_parent, args: IListPhrasesArgs) {
  const { fileId } = args;

  try {
    const phrases = await Phrase.find({ file: fileId }).populate('file').exec();

    if (phrases.length > 0) return phrases;

    const file = await File.findById(fileId);

    if (!file) {
      throw new TradulabError(fileConstants.ERROR_CODES.FILE_NOT_FOUND);
    }

    if (file.processedStatus === 'pending') {
      throw new TradulabError(fileConstants.ERROR_CODES.PROCESSING_IS_PENDING);
    }

    if (file.processedStatus === 'failed') {
      throw new TradulabError(fileConstants.ERROR_CODES.PROCESSING_FAILED);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }

  return [];
}

export const mutations = { createPhrase };
export const queries = { listPhrases };
