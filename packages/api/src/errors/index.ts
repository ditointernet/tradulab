import { ApolloError } from 'apollo-server-express';

import { ERROR_MESSAGES as auth } from '../modules/auth/constants';
import { ERROR_MESSAGES as project } from '../modules/project/constants';
import { ERROR_MESSAGES as role } from '../modules/role/constants';
<<<<<<< HEAD:packages/api/src/errors/index.ts
import { ERROR_MESSAGES as user } from '../modules/user/constants';
=======
import { ERROR_MESSAGES as file } from '../modules/file/constants';
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver:packages/api/src/errors/errorMessages.ts

const errorMessages = {
  ...auth,
  ...project,
  ...role,
<<<<<<< HEAD:packages/api/src/errors/index.ts
  ...user,
=======
  ...file,
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver:packages/api/src/errors/errorMessages.ts
};

export default class TradulabError extends ApolloError {
  constructor(code: string) {
    super(errorMessages[code], code);
  }
}
