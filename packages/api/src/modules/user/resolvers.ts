import { model as User } from '../user';
import { model as Auth } from '../auth';
import { ERROR_CODES } from './constants';
import TradulabError from '../../errors';
import { IUser } from './model';
import {
  buildConnectionQuery,
  buildConnectionResponse,
  escapeRegex,
} from '../../helpers/mappers';

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

  const { where, limit } = buildConnectionQuery<IUser>(args);

  where.username = (new RegExp(
    escapeRegex(args.searchTerm),
    'ig'
  ) as unknown) as string;

  const users = await User.find(where)
    .limit(limit + 1)
    .sort('-createdAt');

  return buildConnectionResponse<IUser>(users, limit);
}

export const queries = { me, getUserByUsername, findUsersByUsername };
export const mutations = {};
