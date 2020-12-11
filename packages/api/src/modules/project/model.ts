import * as mongoose from 'mongoose';
import * as slug from 'slug';

import { ERROR_CODES, REGEXES } from './constants';

import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    slug: {
      type: String,
      index: true,
      required: true,
      minlength: [3, ERROR_CODES.SLUG_SHORT],
      maxlength: [64, ERROR_CODES.SLUG_LONG],
      match: [REGEXES.SLUG, ERROR_CODES.SLUG_INVALID],
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
      minlength: [3, ERROR_CODES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_CODES.DISPLAY_NAME_LONG],
    },
    owner: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
    },
    private: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IProject extends mongoose.Document {
  createdAt: Date;
  displayName: string;
  owner: mongoose.Types.ObjectId | IUser;
  private: boolean;
  slug: string;
  updateAt: Date;
}

schema.pre<IProject>('validate', function preValidate(next) {
  this.slug = slug(this.displayName);
  next();
});

const model = mongoose.model<IProject>('project', schema);

export default model;
