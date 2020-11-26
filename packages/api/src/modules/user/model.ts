import * as mongoose from 'mongoose';
<<<<<<< HEAD

import { ERROR_CODES, REGEXES } from './constants';

const schema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      index: true,
      match: [REGEXES.NICKNAME, ERROR_CODES.NICKNAME_INVALID],
      maxlength: [32, ERROR_CODES.NICKNAME_LONG],
      minlength: [3, ERROR_CODES.NICKNAME_SHORT],
      required: true,
      unique: true,
    },
    username: {
      type: String,
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      maxlength: [64, ERROR_CODES.USERNAME_LONG],
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      required: true,
=======
import { ERROR_MESSAGES, REGEXES } from './constants';

const schema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
    },
    username: {
      type: String,
      index: true,
      match: [REGEXES.USERNAME, ERROR_MESSAGES.USERNAME_INVALID],
      maxlength: [32, ERROR_MESSAGES.USERNAME_LONG],
      minlength: [3, ERROR_MESSAGES.USERNAME_SHORT],
      required: true,
      unique: [true, ERROR_MESSAGES.USERNAME_ALREADY_IN_USE],
>>>>>>> changes
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IUser extends mongoose.Document {
<<<<<<< HEAD
<<<<<<< HEAD
  nickname: String;
  username: String;
=======
  username: string;
  displayName: string;
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> changes
  createdAt: Date;
  displayName: string;
  updateAt: Date;
  username: string;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
