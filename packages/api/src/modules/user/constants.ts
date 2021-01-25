export const ERROR_CODES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USERNAME_ALREADY_IN_USE: 'USERNAME_ALREADY_IN_USE',
  USERNAME_INVALID: 'USERNAME_INVALID',
  USERNAME_LONG: 'USERNAME_LONG',
  USERNAME_SHORT: 'USERNAME_SHORT',
  DISPLAYNAME_INVALID: 'DISPLAYNAME_INVALID',
  DISPLAYNAME_LONG: 'DISPLAYNAME_LONG',
  DISPLAYNAME_SHORT: 'DISPLAYNAME_SHORT',
};

export const ERROR_MESSAGES = {
  USER_NOT_FOUND: 'The provided user does not exist.',
  USERNAME_ALREADY_IN_USE: 'That username is already in use.',
  USERNAME_INVALID: 'That username is invalid.',
  USERNAME_LONG: 'That username is too long.',
  USERNAME_SHORT: 'That username is too short.',
  DISPLAYNAME_INVALID: 'That display name is invalid.',
  DISPLAYNAME_LONG: 'That display name is too long.',
  DISPLAYNAME_SHORT: 'That display name is too short.',
};

export const REGEXES = {
  USERNAME: /^[a-z0-9_]+/, // pode ser melhorado depois
};
