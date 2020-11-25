export const ERROR_CODES = {
  USERNAME_ALREADY_IN_USE: 'USERNAME_ALREADY_IN_USE',
  USERNAME_INVALID: 'USERNAME_INVALID',
  USERNAME_SHORT: 'USERNAME_SHORT',
  USERNAME_LONG: 'USERNAME_LONG',
  DISPLAY_NAME_SHORT: 'DISPLAY_NAME_SHORT',
  DISPLAY_NAME_LONG: 'DISPLAY_NAME_LONG',
};

export const ERROR_MESSAGES = {
  USERNAME_ALREADY_IN_USE: 'That username is already in use.',
  USERNAME_INVALID: 'That username is invalid.',
  USERNAME_SHORT: 'That username is too short.',
  USERNAME_LONG: 'That username is too long.',
  DISPLAY_NAME_SHORT: 'That display name is too short.',
  DISPLAY_NAME_LONG: 'That display name is too long.',
};

export const REGEXES = {
  USERNAME: /^[a-z0-9-]{3,}$/,
};
