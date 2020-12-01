export const ERROR_CODES = {
  EMAIL_ALREADY_IN_USE: 'EMAIL_ALREADY_IN_USE',
  EMAIL_INVALID: 'EMAIL_INVALID',
  EMAIL_SHORT: 'EMAIL_SHORT',
  EMAIL_LONG: 'EMAIL_LONG',
  PASSWORD_EMPTY: 'PASSWORD_EMPTY',
  CREDENTIALS_INVALID: 'CREDENTIALS_INVALID',
};

export const ERROR_MESSAGES = {
  EMAIL_ALREADY_IN_USE: 'That email address is already in use.',
  EMAIL_INVALID: 'That email address is invalid.',
  EMAIL_SHORT: 'That email address is too short.',
  EMAIL_LONG: 'That email address is too long.',
  PASSWORD_EMPTY: 'The password cannot be empty.',
  CREDENTIALS_INVALID: 'Invalid credentials.',
};

export const REGEXES = {
  // https://emailregex.com
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
