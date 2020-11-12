import * as mongoose from 'mongoose';

import { ERROR_MESSAGES, REGEXES } from './constants';

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      index: true,
      required: true,
      minlength: [3, ERROR_MESSAGES.USERNAME_SHORT],
      maxlength: [32, ERROR_MESSAGES.USERNAME_LONG],
      match: [REGEXES.USERNAME, ERROR_MESSAGES.USERNAME_INVALID],
      unique: [true, ERROR_MESSAGES.USERNAME_ALREADY_IN_USE],
    },
    displayName: {
      type: String,
      required: true,
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IUser extends mongoose.Document {
  username: string;
  displayName: string;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
