import { Types } from 'mongoose';

import Suggestion from './model';
import TradulabError from '../../errors';
import { ERROR_CODES } from './constants';

interface IRateSuggestionArgs {
  projectId: Types.ObjectId;
  suggestionId: Types.ObjectId;
  vote: 'positive' | 'negative' | 'clear';
}

async function rateSuggestion(_parent, args: IRateSuggestionArgs, { user }) {
  const { suggestionId, vote } = args;

  const suggestion = await Suggestion.findOne({ id: suggestionId });

  if (!suggestion) {
    throw new TradulabError(ERROR_CODES.SUGGESTION_NOT_FOUND);
  }

  const {
    positiveVotes: currentPositiveVotes,
    negativeVotes: currentNegativeVotes,
  } = suggestion.rating;

  switch (vote) {
    case 'clear': {
      suggestion.rating.positiveVotes = currentPositiveVotes.filter(
        (id) => id !== user
      );
      suggestion.rating.negativeVotes = currentNegativeVotes.filter(
        (id) => id !== user
      );
      break;
    }
    case 'positive':
      if (currentNegativeVotes.includes(user)) {
        throw new TradulabError(ERROR_CODES.CONTRADICTORY_RATING);
      }
      if (!currentPositiveVotes.includes(user)) {
        suggestion.rating.positiveVotes = currentPositiveVotes.concat(user);
      }
      break;
    case 'negative':
      if (currentPositiveVotes.includes(user)) {
        throw new TradulabError(ERROR_CODES.CONTRADICTORY_RATING);
      }
      if (!currentNegativeVotes.includes(user)) {
        suggestion.rating.negativeVotes = currentNegativeVotes.concat(user);
      }
      break;
    default:
      break;
  }

  try {
    await suggestion.save();
  } catch (err) {
    console.error(err);
    throw err;
  }

  const { positiveVotes, negativeVotes } = suggestion.rating;
  const score = positiveVotes.length - negativeVotes.length;

  return {
    positiveVotes,
    negativeVotes,
    score,
  };
}

export const mutations = { rateSuggestion };
export const queries = {};
