// import { ApolloError } from 'apollo-server-express';
// import { Types } from 'mongoose';

// import TradulabError from '../../errors';
import { request, querystringify, get } from '../../helpers/http';

type Phrase = Record<'Id' | 'Key' | 'FileId' | 'Content', string>;

type ListPhrasesResponse =
  | { Phrases: Phrase[] }
  | { error: string }
  | { message: string };

async function listPhrases(_parent, args: { fileId: string; page: number }) {
  const { fileId, page } = args;

  try {
    let totalCount: number;

    const querystring = querystringify({ fileId, page });

    const response = await request('GET', '/phrases' + querystring).then(
      (res) => {
        totalCount = parseInt(res.headers.get('x-total-count'));

        return res.json() as Promise<ListPhrasesResponse>;
      }
    );

    if ('error' in response) {
      throw new Error(response.error);
    } else if ('message' in response) {
      throw new Error(response.message);
    }

    const hasNextPage = page * 100 < totalCount;

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
        hasNextPage,
        startAfter: hasNextPage ? `${page + 1}` : null,
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
    const response = await get<GetPhraseByIdResponse>('/phrases/' + phraseId);

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
