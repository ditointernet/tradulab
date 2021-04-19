export const ERROR_CODES = {
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  INTERNAL_DB_ERROR: 'INTERNAL_DB_ERROR',
  EXPIRED_TOKEN: 'EXPIRED_TOKEN',
  INVALID_TOKEN: 'INVALID_TOKEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
};

export const ERROR_MESSAGES = {
  INTERNAL_ERROR: 'An internal error occurred.',
  INTERNAL_DB_ERROR: 'An internal error occurred related to our databases.',
  EXPIRED_TOKEN: 'The provided JWT already expired.',
  INVALID_TOKEN: 'The provided token is not a valid JWT.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
};
