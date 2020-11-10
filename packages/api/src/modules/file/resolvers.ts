<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';

import { model as File } from '.';
import { model as Project } from '../project';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(parent, args: ICreateFileArgs, context) {
  const { createReadStream, filename } = await args.file;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new ApolloError('File size exceeded, limit is 5MB.');
  }

  const project = await Project.findOne({ _id: args.projectId });

  if (!project) {
    throw new ApolloError('The provided project does not exist.', 'PROJECT_NOT_FOUND');
  }

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
=======
import { model as File } from '.'
import { model as Project } from '../project';

async function createFile(parent, args) {
  const project = await Project.findOne({ project: args.project })

  if (!project) {
    throw new Error('The provided project does not exist.');
  }

  const file = new File({
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
>>>>>>> Criado o module files e a resolver create File
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
