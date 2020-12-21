export const ERROR_CODES = {
  CREDENTIALS_INVALID: 'CREDENTIALS_INVALID',
  EMAIL_ALREADY_IN_USE: 'EMAIL_ALREADY_IN_USE',
  EMAIL_INVALID: 'EMAIL_INVALID',
  EMAIL_LONG: 'EMAIL_LONG',
  EMAIL_SHORT: 'EMAIL_SHORT',
  PASSWORD_EMPTY: 'PASSWORD_EMPTY',
};

export const ERROR_MESSAGES = {
  CREDENTIALS_INVALID: 'Invalid credentials.',
  EMAIL_ALREADY_IN_USE: 'That email address is already in use.',
  EMAIL_INVALID: 'That email address is invalid.',
  EMAIL_LONG: 'That email address is too long.',
  EMAIL_SHORT: 'That email address is too short.',
  PASSWORD_EMPTY: 'The password cannot be empty.',
};

export const REGEXES = {
  // https://emailregex.com
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
