import * as mongoose from 'mongoose';
import * as slug from 'slug';
import { ERROR_MESSAGES, REGEXES } from './constants';
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
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
    slug: {
      type: String,
      index: true,
      match: [REGEXES.SLUG, ERROR_MESSAGES.SLUG_INVALID],
      maxlength: [64, ERROR_MESSAGES.SLUG_LONG],
      minlength: [3, ERROR_MESSAGES.SLUG_SHORT],
      required: true,
      unique: [true, ERROR_MESSAGES.SLUG_ALREADY_IN_USE],
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
