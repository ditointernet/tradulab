import { Types } from 'mongoose';

import Suggestion from './model';
import TradulabError from '../../errors';
import { ERROR_CODES } from './constants';

interface IRateSuggestionArgs {
  projectId: Types.ObjectId;
  suggestionId: Types.ObjectId;
  vote: 'positive' | 'negative';
}

async function rateSuggestion(_parent, args: IRateSuggestionArgs, { user }) {
  const { suggestionId, vote } = args;

  const suggestion = await Suggestion.findOne({ id: suggestionId });

  if (!suggestion) {
    throw new TradulabError(ERROR_CODES.SUGGESTION_NOT_FOUND);
  }

  const {
    positiveVotes: curPositiveArr,
    negativeVotes: curNegativeArr,
  } = suggestion.rating;

  suggestion.rating.positiveVotes =
    (vote === 'positive' && curPositiveArr.includes(user)) ||
    vote === 'negative'
      ? curPositiveArr.filter((id) => id !== user)
      : curPositiveArr.concat(user);

  suggestion.rating.negativeVotes =
    (vote === 'negative' && curNegativeArr.includes(user)) ||
    vote === 'positive'
      ? curNegativeArr.filter((id) => id !== user)
      : curNegativeArr.concat(user);

  try {
    await suggestion.save();
  } catch (err) {
    console.error(err);
    throw err;
  }

  const { positiveVotes, negativeVotes } = suggestion.rating;

  return {
    positiveVotes,
    negativeVotes,
  };
}

export const mutations = { rateSuggestion };
export const queries = {};
