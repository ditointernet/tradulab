import { ApolloError } from 'apollo-server-express';
import { Types } from 'mongoose';

import Suggestion from './model';
import TradulabError from '../../errors';
import { ERROR_CODES } from './constants';
import { ERROR_CODES as ERROR_PHRASES } from '../phrase/constants';
import { model as Phrases } from '../phrase';

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

interface IDeleteSuggestionArgs {
  projectId: Types.ObjectId;
  suggestionId: Types.ObjectId;
}

async function deleteSuggestion(_parent, args: IDeleteSuggestionArgs, context) {
  const { suggestionId } = args;

  const suggestion = await Suggestion.findOne({ id: suggestionId });

  if (!suggestion) {
    throw new TradulabError(ERROR_CODES.SUGGESTION_NOT_FOUND);
  }

  if (suggestion.user !== context.user) {
    throw new TradulabError(ERROR_CODES.FORBIDDEN_FOR_OTHERS);
  }

  try {
    await suggestion.remove();
  } catch (err) {
    console.error(err);
    throw err;
  }

  return true;
}

interface ICreateSuggestionArgs {
  text: string;
  phraseId: string;
  language: string;
}

async function createSuggestion(_parent, args: ICreateSuggestionArgs, context) {
  const { text, phraseId, language } = args;
  const { user } = context;

  const phrase = await Phrases.findById(phraseId);

  if (!phrase) throw new TradulabError(ERROR_CODES.PHRASE_NOT_FOUND);

  const suggestions = new Suggestion({
    text,
    user,
    phrase: phraseId,
    lang: language,
    rating: {
      positiveVotes: [],
      negativeVotes: [],
    },
  });

  try {
    await suggestions.save();
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message);
  }

  return true;
}

export const mutations = { createSuggestion, rateSuggestion, deleteSuggestion };
export const queries = {};
