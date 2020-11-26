import * as mongoose from 'mongoose';
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
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IUser extends mongoose.Document {
  createdAt: Date;
  displayName: string;
  updateAt: Date;
  username: string;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
