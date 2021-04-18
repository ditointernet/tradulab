import { FilterQuery } from 'mongoose';

import { model as User } from '../user';
import { model as Auth } from '../auth';
import { ERROR_CODES } from './constants';
import TradulabError from '../../errors';
import { IUser } from './model';

async function me(_parent, _args, context) {
  const user = await User.findOne({ _id: context.user });
  const auth = await Auth.findOne({ user: context.user });

  return { ...user.toObject(), email: auth.email };
}

function getUserByUsername(_parent, args: { username: string }) {
  return User.findOne({ username: args.username });
}

type FindUserArgs = {
  searchTerm: string;
  limit?: number;
  startAfter?: string;
};

async function findUsersByUsername(_parent, args: FindUserArgs) {
  if (args.searchTerm.length < 3) {
    throw new TradulabError(ERROR_CODES.SEARCH_TERM_SHORT);
  }

  const where: FilterQuery<IUser> = {
    username: (new RegExp(
      escapeRegex(args.searchTerm),
      'ig'
    ) as unknown) as string,
  };

  if (args.startAfter) {
    where.createdAt = {
      $lt: new Date(Buffer.from(args.startAfter, 'base64').toString()),
    };
  }

  const limit = args.limit ?? 25;

  const users = await User.find(where)
    .limit(limit + 1)
    .sort('-createdAt');

  const hasNextPage =
    users.length > limit ? !!users.splice(users.length - 1, 1).length : false;
  const lastDocument = users[users.length - 1];

  return {
    edges: users.map((node) => ({ node })),
    pageInfo: {
      hasNextPage,
      endCursor: lastDocument
        ? Buffer.from(lastDocument.createdAt.toISOString()).toString('base64')
        : undefined,
    },
  };
}

function escapeRegex(input: string) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export const queries = { me, getUserByUsername, findUsersByUsername };
export const mutations = {};
