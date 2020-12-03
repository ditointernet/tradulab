import { ApolloError } from 'apollo-server-express';

import { ERROR_MESSAGES as auth } from '../modules/auth/constants';
import { ERROR_MESSAGES as project } from '../modules/project/constants';
import { ERROR_MESSAGES as role } from '../modules/role/constants';
<<<<<<< HEAD
<<<<<<< HEAD:packages/api/src/errors/index.ts
import { ERROR_MESSAGES as user } from '../modules/user/constants';
=======
import { ERROR_MESSAGES as file } from '../modules/file/constants';
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver:packages/api/src/errors/errorMessages.ts
=======
import { ERROR_MESSAGES as user } from '../modules/user/constants';
>>>>>>> update listFiles and error

const errorMessages = {
  ...auth,
  ...project,
  ...role,
<<<<<<< HEAD
<<<<<<< HEAD:packages/api/src/errors/index.ts
  ...user,
=======
  ...file,
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver:packages/api/src/errors/errorMessages.ts
=======
  ...user,
>>>>>>> update listFiles and error
};

export default class TradulabError extends ApolloError {
  constructor(code: string) {
    super(errorMessages[code], code);
  }
}
