// import { ApolloError } from 'apollo-server-express';
// import { Types } from 'mongoose';
import fetch from 'node-fetch';

// import TradulabError from '../../errors';

const TRADULAB_HOST = 'http://web:8080';

function querystringify<T>(query: T): string {
  return (
    '?' +
    Object.entries(query)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
  );
}

type Phrase = Record<'ID' | 'FileID' | 'Key' | 'Content', string>;

type ListPhrasesResponse = { phrases: Phrase[] } | { error: string };

async function listPhrases(_parent, args: { fileId: string; page: number }) {
  const { fileId, page } = args;

  const querystring = querystringify({ fileId, page });

  try {
    const response = await fetch(TRADULAB_HOST + '/phrases' + querystring).then(
      (res) => res.json() as Promise<ListPhrasesResponse>
    );

    if ('error' in response) {
      throw new Error(response.error);
    }

    return {
      edges: response.phrases.map(
        ({ ID: id, FileID: file, Key: key, Content: content }) => ({
          node: {
            id,
            file,
            key,
            content,
          },
        })
      ),
      pageInfo: {
        hasNextPage: response.phrases.length === 100,
        startAfter: `${page + 1}`,
      },
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

type GetPhraseByIdResponse =
  | Record<'id' | 'key' | 'fileId' | 'content', string>
  | { error: string };

async function getPhraseById(_parent, args: { phraseId: string }) {
  const { phraseId } = args;

  try {
    const response = await fetch(TRADULAB_HOST + '/phrases/' + phraseId).then(
      (res) => res.json() as Promise<GetPhraseByIdResponse>
    );

    if ('error' in response) {
      throw new Error(response.error);
    }

    return {
      ...response,
      file: response.fileId,
      fileId: undefined,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = {};
export const queries = { listPhrases, getPhraseById };
