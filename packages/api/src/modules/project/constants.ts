export const ERROR_CODES = {
  SLUG_ALREADY_IN_USE: 'SLUG_ALREADY_IN_USE',
  SLUG_INVALID: 'SLUG_INVALID',
  SLUG_SHORT: 'SLUG_SHORT',
  SLUG_LONG: 'SLUG_LONG',
  DISPLAY_NAME_SHORT: 'DISPLAY_NAME_SHORT',
  DISPLAY_NAME_LONG: 'DISPLAY_NAME_LONG',
  PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
};

export const ERROR_MESSAGES = {
  DISPLAY_NAME_LONG: 'That display name is too long.',
  DISPLAY_NAME_SHORT: 'That display name is too short.',
  SLUG_ALREADY_IN_USE: 'That slug is already in use.',
  SLUG_INVALID: 'That slug is invalid.',
  SLUG_LONG: 'That slug is too long.',
  SLUG_SHORT: 'That slug is too short.',
  PROJECT_NOT_FOUND: 'The provided project does not exist.',
};

export const REGEXES = {
  SLUG: /^[a-z0-9-]{3,}$/,
};
