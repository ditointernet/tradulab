import { ApolloError } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';
import {
  ERROR_CODES,
  INTERNAL_ERROR,
  MAX_ALLOWED_FILE_SIZE_IN_BYTES,
} from './constants';
import { ROLES } from '../role/constants';
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
    sourceLanguage,
    projectId,
  } = args;

  const { filename } = await args.file;

  if (context.contentLength > MAX_ALLOWED_FILE_SIZE_IN_BYTES) {
    throw new TradulabError('File size exceeded, limit is 5MB.');
  }
  const project = await Project.findOne({ _id: projectId });

  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);

  // CODIGO COMENTADO ABAIXO SERÁ ALTERADO NA BRANCH DE RULES
  // const role = await Role.findOne({ user: context.user._id, project: projectId });

  // if (![ROLES.OWNER, ROLES.MANAGER, ROLES.DEVELOPER].includes(role.role))
  //   throw new TradulabError(ERROR_CODES.NOT_ALLOWED);

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
}

interface IListFileArgs {
  projectId: string;
}

async function listFiles(_, args: IListFileArgs, context) {
  const { projectId } = args;

  const role = await Role.findOne({ user: context.user._id, project: projectId });

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

interface IUpdateFileArgs {
  newFilename: string;
  projectId: string;
  fileId: string;
}

async function updateFile(_parent, args: IUpdateFileArgs, context) {
  const { projectId, fileId } = args;

  const file = await File.findOne({ _id: fileId });

  if (!file) {
    throw new TradulabError(ERROR_CODES.FILE_DOESNT_EXIST);
  }

  // CODIGO COMENTADO ABAIXO SERÁ ALTERADO NA BRANCH DE RULES
  // const project = await Project.findOne({ _id: projectId });

  // if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);

  // const role = await Role.findOne({ user: context.user._id, project: projectId });

  // if (![ROLES.OWNER, ROLES.MANAGER, ROLES.DEVELOPER].includes(role.role))
  //   throw new TradulabError(ERROR_CODES.NOT_ALLOWED);

  // if (!role) throw new TradulabError(ERROR_CODES.NOT_A_MEMBER);

  try {
    file.filename = args.newFilename;
    await file.save();
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message);
  }

  return file;
};

export const mutations = { createFile, updateFile };
export const queries = { listFiles };
