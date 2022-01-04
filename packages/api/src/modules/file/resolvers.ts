import { ApolloError } from 'apollo-server-express';

import { ERROR_CODES } from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { get, post } from '../../helpers/http';
import TradulabError from '../../errors';

type CreateFileArgs = Record<'projectId' | 'filename', string>;
type CreateFileResponse =
  | Record<'Id' | 'Message' | 'Url', string>
  | { error: string };

async function createFile(_, args: CreateFileArgs) {
  const { projectId, filename } = args;

  const project = await Project.findOne({ _id: projectId });

  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);

  try {
    const response = await post<CreateFileResponse>('/files', {
      project_id: projectId,
      file_name: filename,
    });
    const body = response.data;

    if ('error' in body) {
      throw new Error(body.error);
    }

    return {
      id: body.Id,
      upload_url: body.Url,
    };
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
}

type File = {
  Id: string;
  ProjectId: string;
  Status: 'SUCCESS' | 'CREATED';
};

type ListFileResponse =
  | {
      files: File[];
    }
  | {
      message: string;
    };

type ListFileQuery = { projectId: string };

async function listFiles(_, args: ListFileQuery, context) {
  const { projectId } = args;

  const role = await Role.findOne({
    user: context.user,
    project: projectId,
  });

  if (!role) throw new TradulabError(ERROR_CODES.NOT_A_MEMBER);

  try {
    const response = await get<ListFileResponse, ListFileQuery>('/files', args);
    const body = response.data;

    if ('message' in body) {
      throw new Error(body.message);
    }

    return body.files.map(
      ({ Id: id, ProjectId: project, Status: processedStatus }) => ({
        id,
        project,
        processedStatus,
      })
    );
  } catch (err) {
    console.error(err);

    throw new ApolloError(err.message);
  }
}

type UploadFileArgs = Record<'projectId' | 'fileId' | 'filename', string>;

type UploadFileResponse = Record<'Id' | 'Url', string> | { error: string };

async function uploadFile(_parent, args: UploadFileArgs) {
  const { projectId: project_id, filename: file_name, fileId } = args;

  try {
    const response = await post<UploadFileResponse>(
      `/files/${fileId}/signed-url`,
      { project_id, file_name }
    );

    const body = response.data;

    if ('error' in body) {
      throw new Error(body.error);
    }

    return {
      id: body.Id,
      upload_url: body.Url,
    };
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message);
  }
}

export const mutations = { createFile, uploadFile };
export const queries = { listFiles };
