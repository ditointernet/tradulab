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

type Phrase = Record<'Id' | 'Key' | 'FileId' | 'Content', string>;

type ListPhrasesResponse = { Phrases: Phrase[] } | { error: string };

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
      edges: response.Phrases.map(
        ({ Id: id, FileId: file, Key: key, Content: content }) => ({
          node: {
            id,
            file,
            key,
            content,
          },
        })
      ),
      pageInfo: {
        hasNextPage: response.Phrases.length === 100,
        startAfter: `${page + 1}`,
      },
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

type GetPhraseByIdResponse = Phrase | { error: string };

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
      id: response.Id,
      key: response.Key,
      file: response.FileId,
      content: response.Content,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = {};
export const queries = { listPhrases, getPhraseById };
