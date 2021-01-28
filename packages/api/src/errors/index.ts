import { ApolloError } from 'apollo-server-express';

import { ERROR_MESSAGES as auth } from '../modules/auth/constants';
import { ERROR_MESSAGES as project } from '../modules/project/constants';
import { ERROR_MESSAGES as role } from '../modules/role/constants';
import { ERROR_MESSAGES as user } from '../modules/user/constants';
import { ERROR_MESSAGES as file } from '../modules/file/constants';
import { ERROR_MESSAGES as suggestion } from '../modules/suggestion/constants';

const errorMessages = {
  ...auth,
  ...project,
  ...role,
  ...user,
  ...file,
  ...suggestion,
};

export default class TradulabError extends ApolloError {
  constructor(code: string) {
    super(errorMessages[code], code);
  }
}
