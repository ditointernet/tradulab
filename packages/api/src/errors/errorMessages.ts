import { ERROR_MESSAGES as auth } from '../modules/auth/constants';
import { ERROR_MESSAGES as user } from '../modules/user/constants';

const errorMessages = {
  ...auth,
  ...user,
};

export default errorMessages;
