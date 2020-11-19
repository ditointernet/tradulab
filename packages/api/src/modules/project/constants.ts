export const ERROR_MESSAGES = {
  // No input não se pede slug, mas sim o displayName, então será que é interessante
  // deixar esses erros de slug, dado que o slug é feito automaticamente?

  SLUG_ALREADY_IN_USE: 'That slug is already in use.',
  SLUG_INVALID: 'That slug is invalid.',
  SLUG_SHORT: 'That slug is too short.',
  SLUG_LONG: 'That slug is too long.',
  DISPLAY_NAME_SHORT: 'That display name is too short.',
  DISPLAY_NAME_LONG: 'That display name is too long.',
};

export const REGEXES = {
  SLUG: /^[a-z0-9-]{3,}$/,
};
