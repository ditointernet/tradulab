import { ApolloError } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';
import { MAX_ALLOWED_FILE_SIZE_IN_BYTES } from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';

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
    throw new ApolloError('File size exceeded, limit is 5MB.');
  }

  const project = await Project.findOne({ _id: projectId });

  if (!project) {
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
  }

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

    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }

  return file;
}

interface IListFileArgs {
  projectId: string;
}

async function listFiles(_, args: IListFileArgs, context) {
  const { projectId } = args;

  const role = Role.findOne({ user: context.user.id, project: projectId });

  if (!role) {
    throw new ApolloError("You don't have a role in this project");
  }

  const files = File.find({ project: projectId }).populate('project').exec();

  return files || [];
}

export const mutations = { createFile };
export const queries = { listFiles };
