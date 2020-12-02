import { FileUpload } from 'graphql-upload';
import { TradulabError } from '../../errors';

import { model as File } from '.';
import { model as Project } from '../project';
import { ERROR_CODES as fileCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(parent, args: ICreateFileArgs, context) {
  const { createReadStream, filename } = await args.file;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new TradulabError(fileCodes.SIZE_EXCEEDED);
  }

  const project = await Project.findOne({ _id: args.projectId });

  if (!project) {
    throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);
  }

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
    project,
  });

  try {
    await file.save();
  } catch (err) {
    throw err;
  }

  return file;
}

export const mutations = { createFile };
