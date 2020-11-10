<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';
import {
  ERROR_CODES,
  INTERNAL_ERROR,
  MAX_ALLOWED_FILE_SIZE_IN_BYTES,
} from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
import TradulabError from '../../errors';

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(_, args: ICreateFileArgs, context) {
  const {
    file: { filename },
    sourceLanguage,
    projectId,
  } = args;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new TradulabError('File size exceeded, limit is 5MB.');
  }

  const project = await Project.findOne({ _id: projectId });

  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);

  const file = new File({
    extension: filename.split('.').pop(),
    filename,
    project,
    sourceLanguage,
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
    project,
>>>>>>> Criado o module files e a resolver create File
  });

  try {
    await file.save();
  } catch (err) {
<<<<<<< HEAD
    console.error(err);

    throw new ApolloError(err.message);
=======
    throw err;
>>>>>>> Criado o module files e a resolver create File
  }

  return file;
}

<<<<<<< HEAD
interface IListFileArgs {
  projectId: string;
}

async function listFiles(_, args: IListFileArgs, context) {
  const { projectId } = args;

  const role = Role.findOne({ user: context.user.id, project: projectId });

  if (!role) throw new TradulabError(ERROR_CODES.NOT_A_MEMBER);

  const files = File.find({ project: projectId }).populate('project');

  try {
    files.exec();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }

  return files || [];
}

export const mutations = { createFile };
export const queries = { listFiles };
=======
export const mutations = { createFile };
>>>>>>> Criado o module files e a resolver create File
