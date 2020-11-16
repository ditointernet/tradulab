<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Criado o module files e a resolver create File
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
import { FileUpload } from 'graphql-upload';
<<<<<<< HEAD
import { TradulabError } from '../../errors';

import { model as File } from '.';
import { model as Project } from '../project';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ERROR_CODES as fileCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
>>>>>>> changes

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
<<<<<<< HEAD
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
=======
=======
import path from 'path';
import fs from 'fs';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { model as File } from '.'
=======
import { FileUpload } from 'graphql-upload';

import { model as File } from '.';
>>>>>>> formatting changes and some typings
import { model as Project } from '../project';

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(parent, args: ICreateFileArgs, context) {
  const { createReadStream, filename } = await args.file;

  // const stream = createReadStream();
  // stream.on('data', (chunk) => console.log(chunk.toString()));
  const project = await Project.findOne({ _id: args.projectId });

<<<<<<< HEAD
<<<<<<< HEAD
  const file = new File({
=======
=======
import path from 'path';
import fs from 'fs';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { model as File } from '.'
=======
import { FileUpload } from 'graphql-upload';

import { model as File } from '.';
>>>>>>> formatting changes and some typings
import { model as Project } from '../project';
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
>>>>>>> file size limit from content length header
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
>>>>>>> file size limit from content length header

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

<<<<<<< HEAD
<<<<<<< HEAD
  const file = new File({
>>>>>>> Criado o module files e a resolver create File
=======
=======
import path from 'path';
import fs from 'fs';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { model as File } from '.'
=======
import { FileUpload } from 'graphql-upload';

import { model as File } from '.';
>>>>>>> formatting changes and some typings
import { model as Project } from '../project';
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
>>>>>>> file size limit from content length header

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(parent, args: ICreateFileArgs, context) {
  const { createReadStream, filename } = await args.file;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new Error('File size exceeded, limit is 5MB.');
=======
    throw new ApolloError('File size exceeded, limit is 5MB.');
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
  }

  const project = await Project.findOne({ _id: projectId });

<<<<<<< HEAD
<<<<<<< HEAD
  const file = new File({
>>>>>>> Criado o module files e a resolver create File
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
>>>>>>> Criado o module files e a resolver create File
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    project,
  });
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment

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

  // return file;
=======
    project,
  });
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  if (!project) {
    throw new Error('The provided project does not exist.');
  }
>>>>>>> Corrigido erro de cors pra qualquer request

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
    project,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  return file;
>>>>>>> Criado o module files e a resolver create File
=======
  // try {
  //   await file.save();
  // } catch (err) {
  //   throw err;
  // }

  // return file;
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    project,
  });
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  if (!project) {
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
  }
>>>>>>> Corrigido erro de cors pra qualquer request

  const file = new File({
    extension: filename.split('.').pop(),
    filename,
    project,
    sourceLanguage,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  return file;
>>>>>>> Criado o module files e a resolver create File
=======
  // try {
  //   await file.save();
  // } catch (err) {
  //   throw err;
  // }

  // return file;
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
    project,
  });

>>>>>>> Criado o module files e a resolver create File
  try {
    await file.save();
  } catch (err) {
    throw err;
  }

  return file;
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  try {
    await file.save();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }

  return file;
>>>>>>> Corrigido erro de cors pra qualquer request
}

interface IListFileArgs {
  projectId: string;
}

async function listFiles(_, args: IListFileArgs, context) {
  const { projectId } = args;
  console.log('projectId', projectId);
  const role = Role.findOne({ user: context.user.id, project: projectId });

  if (!role) {
    throw new ApolloError("You don't have a role in this project");
  }

  const files = File.find({ project: projectId }).populate('project').exec();

  return files || [];
}

export const mutations = { createFile };
export const queries = { listFiles };
=======
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
=======
  if (!project) {
    throw new ApolloError('The provided project does not exist.', 'PROJECT_NOT_FOUND');
  }
>>>>>>> Corrigido erro de cors pra qualquer request

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
=======
=======
import path from 'path';
import fs from 'fs';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { model as File } from '.'
import { model as Project } from '../project';
import { model as Role } from '../role';

async function createFile(parent, args, context) {
  const { createReadStream, filename } = await args.file;
  console.log(args.file);

  const stream = createReadStream();
  stream.on('data', (chunk) => console.log(chunk.toString()));
  const project = await Project.findOne({ _id: args.projectId })

<<<<<<< HEAD
<<<<<<< HEAD
  const file = new File({
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
>>>>>>> Criado o module files e a resolver create File
    project,
  });
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  if (!project) {
    throw new Error('The provided project does not exist.');
  }
>>>>>>> Corrigido erro de cors pra qualquer request

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // return file;
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  return file;
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  // return file;
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  return file;
>>>>>>> Corrigido erro de cors pra qualquer request
}

export const mutations = { createFile };
>>>>>>> Criado o module files e a resolver create File
