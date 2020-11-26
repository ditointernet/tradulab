import * as mongoose from 'mongoose';
import * as slug from 'slug';
<<<<<<< HEAD

<<<<<<< HEAD
import { ERROR_CODES, REGEXES } from './constants';

=======
=======
>>>>>>> changes
import { ERROR_MESSAGES, REGEXES } from './constants';
>>>>>>> we abstracted the role validation and finished all role mutations
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
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
=======
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
>>>>>>> changes
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
  // this.set({ slug: this.displayName });
  this.slug = slug(this.displayName);
  next();
});

const model = mongoose.model<IProject>('project', schema);

export default model;
