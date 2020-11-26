import * as mongoose from 'mongoose';
import * as slug from 'slug';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { ERROR_CODES, REGEXES } from './constants';
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> changes
=======
>>>>>>> changes
import { ERROR_MESSAGES, REGEXES } from './constants';
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> Back-End Review
=======

>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> we abstracted the role validation and finished all role mutations
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: {
=======
<<<<<<< HEAD
    slug: {
>>>>>>> changes
=======
<<<<<<< HEAD
    slug: {
=======
    name: {
>>>>>>> Back-End Review
>>>>>>> Back-End Review
      type: String,
      maxlength: [64, ERROR_CODES.NAME_LONG],
      minlength: [3, ERROR_CODES.NAME_SHORT],
      required: true,
      unique: true,
    },
    private: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      index: true,
      match: [REGEXES.SLUG, ERROR_CODES.SLUG_INVALID],
      maxlength: [64, ERROR_CODES.SLUG_LONG],
      minlength: [3, ERROR_CODES.SLUG_SHORT],
      required: true,
<<<<<<< HEAD
<<<<<<< HEAD
      unique: true,
=======
=======
>>>>>>> Back-End Review
      minlength: [3, ERROR_CODES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_CODES.DISPLAY_NAME_LONG],
=======
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
>>>>>>> changes
<<<<<<< HEAD
>>>>>>> changes
=======
=======
      unique: true,
>>>>>>> Back-End Review
>>>>>>> Back-End Review
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> changes
    },
<<<<<<< HEAD
    private: {
      type: Boolean,
      default: false,
>>>>>>> changes
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
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
=======
>>>>>>> changes
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IProject extends mongoose.Document {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
  name: String;
  private: Boolean;
  slug: String;
  owner: IUser | mongoose.Types.ObjectId;
<<<<<<< HEAD
  createdAt: Date;
=======
  createdAt: Date;
  displayName: string;
  owner: mongoose.Types.ObjectId | IUser;
  private: boolean;
  slug: string;
>>>>>>> changes
=======
  createdAt: Date;
>>>>>>> Back-End Review
=======
  slug: string;
=======
  createdAt: Date;
>>>>>>> changes
  displayName: string;
  owner: mongoose.Types.ObjectId | IUser;
<<<<<<< HEAD
  createdAt: Date;
>>>>>>> we abstracted the role validation and finished all role mutations
=======
  private: boolean;
  slug: string;
>>>>>>> changes
  updateAt: Date;
}

schema.pre<IProject>('validate', function preValidate(next) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  this.slug = slug(this.name);
=======
  // this.set({ slug: this.displayName });
=======
>>>>>>> changes
=======
>>>>>>> we abstracted the role validation and finished all role mutations
=======
  // this.set({ slug: this.displayName });
>>>>>>> changes
  this.slug = slug(this.displayName);
>>>>>>> changes
=======
  this.slug = slug(this.name);
>>>>>>> Back-End Review
  next();
});

const model = mongoose.model<IProject>('project', schema);

export default model;
