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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { ApolloError } from 'apollo-server-express';
=======
<<<<<<< HEAD
>>>>>>> Back-End Review
=======
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
=======
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> formatting changes and some typings
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> file size limit from content length header
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
=======
>>>>>>> file size limit from content length header
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
import { ApolloError } from 'apollo-server-express';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
import { FileUpload } from 'graphql-upload';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
  ERROR_CODES,
  INTERNAL_ERROR,
  MAX_ALLOWED_FILE_SIZE_IN_BYTES,
} from './constants';
=======
=======
>>>>>>> update listFiles and error
<<<<<<< HEAD
import { TradulabError } from '../../errors';

>>>>>>> changes
import { model as File } from '.';
import { model as Project } from '../project';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { model as Role } from '../role';
import TradulabError from '../../errors';
=======
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> file size limit from content length header
<<<<<<< HEAD
import { ERROR_CODES as fileCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
>>>>>>> changes
<<<<<<< HEAD
>>>>>>> changes
=======
=======
=======
>>>>>>> update listFiles and error
import {
  ERROR_CODES,
  INTERNAL_ERROR,
  MAX_ALLOWED_FILE_SIZE_IN_BYTES,
} from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
import TradulabError from '../../errors';
<<<<<<< HEAD
>>>>>>> update listFiles and error
>>>>>>> update listFiles and error
=======
>>>>>>> update listFiles and error

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(_, args: ICreateFileArgs, context) {
  const {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    file: { filename },
    sourceLanguage,
    projectId,
=======
    file: { createReadStream, filename },
    sourceLanguage,
>>>>>>> changes
=======
    file: { filename },
    sourceLanguage,
    projectId,
>>>>>>> list files done
=======
    file: { filename },
    sourceLanguage,
    projectId,
>>>>>>> list files done
  } = args;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    throw new TradulabError('File size exceeded, limit is 5MB.');
=======
=======
>>>>>>> update listFiles and error
<<<<<<< HEAD
    throw new TradulabError(fileCodes.SIZE_EXCEEDED);
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
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
=======
import { FileUpload } from 'graphql-upload';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
import { model as File } from '.';
>>>>>>> formatting changes and some typings
import { model as Project } from '../project';
<<<<<<< HEAD
=======
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
>>>>>>> file size limit from content length header
=======
import { model as Role } from '../role';
>>>>>>> changes

interface ICreateFileArgs {
  file: FileUpload;
  projectId: string;
  sourceLanguage: string;
}

async function createFile(_, args: ICreateFileArgs, context) {
  const {
    file: { createReadStream, filename },
    sourceLanguage,
  } = args;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new ApolloError('File size exceeded, limit is 5MB.');
  }

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
=======
    throw new TradulabError('File size exceeded, limit is 5MB.');
>>>>>>> update listFiles and error
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
=======
=======
>>>>>>> formatting changes and some typings
import { ApolloError } from 'apollo-server-express';
>>>>>>> Back-End Review
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
=======
    throw new TradulabError('File size exceeded, limit is 5MB.');
>>>>>>> update listFiles and error
  }

  const project = await Project.findOne({ _id: projectId });
<<<<<<< HEAD

<<<<<<< HEAD
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
  }

  // const stream = createReadStream();
  // stream.on('data', (chunk) => console.log(chunk.toString()));

  const project = await Project.findOne({ _id: args.projectId });
=======
>>>>>>> list files done

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
>>>>>>> Criado o module files e a resolver create File
    filename: args.filename,
    translation_progress: 0,
    approval_progress: 0,
    source_language: args.source_language,
    extension: args.extension,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
  try {
    await file.save();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
=======
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }

>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
  // if (!project) {
  //   throw new Error('The provided project does not exist.');
  // }
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  if (!project) {
    throw new ApolloError('The provided project does not exist.', 'PROJECT_NOT_FOUND');
  }
>>>>>>> Corrigido erro de cors pra qualquer request

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
=======
  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);
>>>>>>> update listFiles and error

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
=======
    project,
  });

>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  try {
    await file.save();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }

  return file;
>>>>>>> Corrigido erro de cors pra qualquer request
}

interface IListFileArgs {
  projectId: string;
}

async function listFiles(_, args: IListFileArgs, context) {
  const { projectId } = args;

  const role = Role.findOne({ user: context.user.id, project: projectId });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> update listFiles and error
  if (!role) throw new TradulabError(ERROR_CODES.NOT_A_MEMBER);

  const files = File.find({ project: projectId }).populate('project');

  try {
    files.exec();
  } catch (err) {
    console.error(err);
<<<<<<< HEAD

    throw new ApolloError(err.message);
  }

  return files || [];
=======
  if (!role) {
    throw new ApolloError("You don't have a role in this project");
  }
=======
>>>>>>> update listFiles and error

    throw new ApolloError(err.message);
  }

<<<<<<< HEAD
  return files;
>>>>>>> changes
=======
  return files || [];
>>>>>>> list files done
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
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
  }
>>>>>>> Corrigido erro de cors pra qualquer request

  const file = new File({
    filename,
    translationProgress: 0,
    approvalProgress: 0,
    sourceLanguage: args.sourceLanguage,
    extension: filename.split('.').pop(),
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  return file;
=======
=======

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  // try {
  //   await file.save();
  // } catch (err) {
  //   throw err;
  // }

  // return file;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
}

export const mutations = { createFile };
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
}

export const mutations = { createFile };
>>>>>>> Criado o module files e a resolver create File
=======
=======
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
  if (!project) {
    throw new Error('The provided project does not exist.');
  }
=======
  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);
>>>>>>> update listFiles and error

  const file = new File({
    extension: filename.split('.').pop(),
    filename,
    project,
    sourceLanguage,
  });

  try {
    await file.save();
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }

  return file;
>>>>>>> Corrigido erro de cors pra qualquer request
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
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
export const queries = { listFiles };
>>>>>>> changes
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  if (!project) {
    throw new ApolloError('The provided project does not exist.', 'PROJECT_NOT_FOUND');
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

<<<<<<< HEAD
<<<<<<< HEAD
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
