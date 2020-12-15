export const ERROR_CODES = {
  NICKNAME_ALREADY_IN_USE: 'NICKNAME_ALREADY_IN_USE',
  NICKNAME_INVALID: 'NICKNAME_INVALID',
  NICKNAME_LONG: 'NICKNAME_LONG',
  NICKNAME_SHORT: 'NICKNAME_SHORT',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USERNAME_INVALID: 'USERNAME_INVALID',
  USERNAME_LONG: 'USERNAME_LONG',
  USERNAME_SHORT: 'USERNAME_SHORT',
};

export const ERROR_MESSAGES = {
  NICKNAME_ALREADY_IN_USE: 'That nickname is already in use.',
  NICKNAME_INVALID: 'That nickname is invalid.',
  NICKNAME_LONG: 'That display name is too long.',
  NICKNAME_SHORT: 'That display name is too short.',
  USER_NOT_FOUND: 'The provided user does not exist.',
  USERNAME_INVALID: 'That username is invalid.',
  USERNAME_LONG: 'That username is too long.',
  USERNAME_SHORT: 'That username is too short.',
};

export const REGEXES = {
  // Instagram username regex
  NICKNAME: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,32}$/,
  USERNAME: /^[^\s][a-zA-Z\s]*[a-zA-z]$/,
};
