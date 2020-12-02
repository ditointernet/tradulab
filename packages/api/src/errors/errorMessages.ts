import { ERROR_MESSAGES as auth } from '../modules/auth/constants';
import { ERROR_MESSAGES as user } from '../modules/user/constants';
import { ERROR_MESSAGES as project } from '../modules/project/constants';
import { ERROR_MESSAGES as role } from '../modules/role/constants';
import { ERROR_MESSAGES as file } from '../modules/file/constants';

const errorMessages = {
  ...auth,
  ...user,
  ...project,
  ...role,
  ...file,
};

export default errorMessages;
