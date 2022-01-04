// import { ApolloError } from 'apollo-server-express';
// import { Types } from 'mongoose';

// import TradulabError from '../../errors';
import { AxiosError } from 'axios';
import { get } from '../../helpers/http';

type Phrase = Record<'Id' | 'Key' | 'FileId' | 'Content', string>;

type ListPhraseQuery = { fileId: string; page: number };
type ListPhrasesResponse =
  | { Phrases: Phrase[] }
  | { error: string }
  | { message: string };

async function listPhrases(_parent, args: ListPhraseQuery) {
  try {
    const response = await get<ListPhrasesResponse>('/phrases', args);

    const body = response.data;
    const totalCount = parseInt(response.headers['x-total-count']);

    if ('error' in body) {
      throw new Error(body.error);
    } else if ('message' in body) {
      throw new Error(body.message);
    }

    const hasNextPage = args.page * 100 < totalCount;

    return {
      edges: body.Phrases.map(
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
        startAfter: hasNextPage ? `${args.page + 1}` : null,
      },
    };
  } catch (err) {
    const error = err as AxiosError<ListPhrasesResponse>;
    const body = error.response.data;

    if ('error' in body) {
      throw new Error(body.error);
    } else if ('message' in body) {
      throw new Error(body.message);
    } else {
      throw new Error('internal error');
    }
  }
}

type GetPhraseByIdResponse = Phrase | { error: string };

async function getPhraseById(_parent, args: { phraseId: string }) {
  const { phraseId } = args;

  try {
    const response = await get<GetPhraseByIdResponse>('/phrases/' + phraseId);
    const body = response.data;

    if ('error' in body) {
      throw new Error(body.error);
    }

    return {
      id: body.Id,
      key: body.Key,
      file: body.FileId,
      content: body.Content,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = {};
export const queries = { listPhrases, getPhraseById };
