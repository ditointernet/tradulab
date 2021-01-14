export const ERROR_CODES = {
  MAX_ALLOWED_FILE_SIZE: 'MAX_ALLOWED_FILE_SIZE',
  NOT_A_MEMBER: 'NOT_A_MEMBER',
  PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
  FILE_DOESNT_EXIST: 'FILE_DOESNT_EXIST',
};

export const ERROR_MESSAGES = {
  MAX_ALLOWED_FILE_SIZE: 'File size exceeded, limit is 5MB.',
  NOT_A_MEMBER: "You don't have a role in this project",
  PROJECT_NOT_FOUND: 'The provided project does not exist.',
  FILE_DOESNT_EXIST: 'The provided file does not exist.',
};

export const INTERNAL_ERROR = 'INTERNAL_ERROR';

export const EXTENSION_LIST = ['json', 'txt', 'csv'];

export const MAX_ALLOWED_FILE_SIZE_IN_BYTES = 1e3 * 1e3 * 5; // currently 5MB

export const REGEXES = {
  SLUG: /^[a-z0-9-]{3,}$/,
};
