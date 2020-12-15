import * as mongoose from 'mongoose';

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
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IUser extends mongoose.Document {
  nickname: String;
  username: String;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
