import * as mongoose from 'mongoose';
import * as slug from 'slug';

import { ERROR_MESSAGES, REGEXES } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    slug: {
      type: String,
      index: true,
      required: true,
      minlength: [3, ERROR_MESSAGES.SLUG_SHORT],
      maxlength: [64, ERROR_MESSAGES.SLUG_LONG],
      match: [REGEXES.SLUG, ERROR_MESSAGES.SLUG_INVALID],
      unique: [true, ERROR_MESSAGES.SLUG_ALREADY_IN_USE],
    },
    displayName: {
      type: String,
      required: true,
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
    },
    owner: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

schema.pre('validate', function preValidate(next) {
  this.slug = slug(this.displayName);
  next();
});

const model = mongoose.model('project', schema);

export default model;
