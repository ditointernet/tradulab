export const ERROR_CODES = {
  MAX_ALLOWED_FILE_SIZE: 'MAX_ALLOWED_FILE_SIZE',
  NOT_A_MEMBER: 'NOT_A_MEMBER',
  PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
  FILE_NOT_FOUND: 'FILE_NOT_FOUND',
  NOT_ALLOWED: 'NOT_ALLOWED',
  FILE_SIZE_EXCEED: 'FILE_SIZE_EXCEED',
  PROCESSING_FAILED: 'PROCESSING_FAILED',
  PROCESSING_IS_PENDING: 'PROCESSING_PENDING',
};

export const ERROR_MESSAGES = {
  MAX_ALLOWED_FILE_SIZE: 'File size exceeded, limit is 5MB.',
  NOT_A_MEMBER: "You don't have a role in this project",
  PROJECT_NOT_FOUND: 'The provided project does not exist.',
  FILE_NOT_FOUND: 'The provided file does not exist.',
  NOT_ALLOWED: "You don't have permission to execute this action.",
  FILE_SIZE_EXCEED: 'File size exceeded, limit is 5MB.',
  PROCESSING_FAILED: 'Phrase processing in this file failed',
  PROCESSING_IS_PENDING: 'Phrase processing in this file is pending',
};

export const INTERNAL_ERROR = 'INTERNAL_ERROR';

export const EXTENSION_LIST = [
  'json',
  // 'csv'
];
export const PROCESS_STATUSES = ['pending', 'done', 'failed'];

export const MAX_ALLOWED_FILE_SIZE_IN_BYTES = 1e3 * 1e3 * 5; // currently 5MB

export const REGEXES = {
  SLUG: /^[a-z0-9-]{3,}$/,
};
