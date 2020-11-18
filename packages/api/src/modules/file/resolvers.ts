import { FileUpload } from 'graphql-upload';

import { model as File } from '.';
import { model as Project } from '../project';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

interface IUpdateFileArgs {
  newFilename: string;
  projectId: string;
  fileId: string;
}

async function createFile(parent, args: ICreateFileArgs, context) {
  const { createReadStream, filename } = await args.file;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new Error('File size exceeded, limit is 5MB.');
  }

  // const stream = createReadStream();
  // stream.on('data', (chunk) => console.log(chunk.toString()));

  const project = await Project.findOne({ _id: args.projectId });

  if (!project) {
    throw new Error('The provided project does not exist.');
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
};

async function updateFile(parent, args: IUpdateFileArgs) {

  const file = await File.findOne({ _id: args.fileId });

  if (!file) {
    throw new Error('The provided file does not exist.');
  }

  try {
    file.filename = args.newFilename;
    await file.save();
  } catch (err) {
    console.error(err);
    throw err;
  }

  return file;
};

export const mutations = { createFile, updateFile };
