import { ApolloError } from 'apollo-server-express';
import fetch from 'node-fetch';

import { ERROR_CODES } from './constants';
import { model as File } from '.';
import { model as Project } from '../project';
import { model as Role } from '../role';
import TradulabError from '../../errors';

type CreateFileArgs = Record<'projectId' | 'filename', string>;
type CreateFileResponse =
  | Record<'Id' | 'Message' | 'Url', string>
  | { error: string };

const TRADULAB_HOST = 'http://web:8080';

async function createFile(_, args: CreateFileArgs) {
  const { projectId, filename } = args;

  const project = await Project.findOne({ _id: projectId });

  if (!project) throw new TradulabError(ERROR_CODES.PROJECT_NOT_FOUND);

  try {
    const response = await fetch(TRADULAB_HOST + '/files', {
      method: 'POST',
      body: JSON.stringify({
        project_id: projectId,
        file_name: filename,
      }),
    }).then((res) => res.json() as Promise<CreateFileResponse>);

    if ('error' in response) {
      throw new Error(response.error);
    }

    return {
      id: response.Id,
      upload_url: response.Url,
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

async function listFiles(_, args: { projectId: string }, context) {
  const { projectId } = args;

  const role = await Role.findOne({
    user: context.user,
    project: projectId,
  });

  if (!role) throw new TradulabError(ERROR_CODES.NOT_A_MEMBER);

  try {
    const response = await fetch(
      TRADULAB_HOST + '/files?projectId=' + projectId
    ).then((res) => res.json() as Promise<ListFileResponse>);

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response.files.map(
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
  const { projectId, filename, fileId } = args;

  try {
    const response = await fetch(
      TRADULAB_HOST + `/files/${fileId}/signed-url`,
      {
        method: 'POST',
        body: JSON.stringify({
          project_id: projectId,
          file_name: filename,
        }),
      }
    ).then((res) => res.json() as Promise<UploadFileResponse>);

    if ('error' in response) {
      throw new Error(response.error);
    }

    return {
      id: response.Id,
      upload_url: response.Url,
    };
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message);
  }
}

export const mutations = { createFile, uploadFile };
export const queries = { listFiles };
