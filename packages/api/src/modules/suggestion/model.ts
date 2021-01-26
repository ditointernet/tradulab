import * as mongoose from 'mongoose';

import { LANGS_LIST, ERROR_CODES } from './constants';

const { Types } = mongoose.Schema;

const ratingSchema = new mongoose.Schema({
  positiveVotes: [Types.ObjectId],
  negativeVotes: [Types.ObjectId],
});

const suggestionSchema = new mongoose.Schema(
  {
    phrase: {
      type: Types.ObjectId,
      ref: 'phrase',
      required: true,
      index: true,
    },
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
    lang: {
      type: String,
      enum: LANGS_LIST,
      required: true,
      index: true,
    },
    text: {
      type: String,
      required: true,
      minlength: [1, ERROR_CODES.TEXT_SHORT],
      maxlength: [1024, ERROR_CODES.TEXT_LONG],
    },
    rating: {
      type: ratingSchema,
      required: true,
    },
    approved: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

type Rating = {
  positiveVotes: mongoose.Types.ObjectId[];
  negativeVotes: mongoose.Types.ObjectId[];
};

export interface ISuggestion extends mongoose.Document {
  phrase: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  lang: string;
  text: string;
  rating: Rating;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<ISuggestion>('suggestion', suggestionSchema);

export default model;
