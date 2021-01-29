export const ERROR_CODES = {
  TEXT_SHORT: 'TEXT_SHORT',
  TEXT_LONG: 'TEXT_LONG',
  SUGGESTION_NOT_FOUND: 'SUGGESTION_NOT_FOUND',
  CONTRADICTORY_RATING: 'CONTRADICTORY_RATING',
  FORBIDDEN_FOR_OTHERS: 'FORBIDDEN_FOR_OTHERS',
};

export const ERROR_MESSAGES = {
  TEXT_SHORT: 'The suggestion text is too short.',
  TEXT_LONG: 'The suggestion text is too long.',
  SUGGESTION_NOT_FOUND: 'The provided suggestion does not exist.',
  CONTRADICTORY_RATING: 'You cannot upvote e downvote the same suggestion.',
  FORBIDDEN_FOR_OTHERS: "You cannot delete someone else's suggestion.",
};

export const LANGS_LIST = ['pt_br', 'en_us'];
