<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
=======
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
    filename,
=======
=======
=======
import path from 'path';
import fs from 'fs';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { model as File } from '.'
import { model as Project } from '../project';

async function createFile(parent, args, context) {
  console.log(args.file);
  const { filename, mimetype, encoding } = await args.file;

  // const project = await Project.findOne({ project: args.project })

<<<<<<< HEAD
  const file = new File({
=======
import { model as File } from '.'
import { model as Project } from '../project';

async function createFile(parent, args) {
  const project = await Project.findOne({ project: args.project })

  if (!project) {
    throw new Error('The provided project does not exist.');
  }

  const file = new File({
>>>>>>> Criado o module files e a resolver create File
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
    project,
    sourceLanguage,
  });
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment

<<<<<<< HEAD
  try {
    await file.save();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
=======
  // const file = new File({
  //   filename,
  //   translation_progress: 0,
  //   approval_progress: 0,
  //   source_language: args.source_language,
  //   extension: filename.split('.').pop(),
  //   project,
  // });

  // try {
  //   await file.save();
  // } catch (err) {
  //   throw err;
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment

  // return file;
=======
    project,
  });

  try {
    await file.save();
  } catch (err) {
    throw err;
  }

  return file;
>>>>>>> Criado o module files e a resolver create File
}

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
