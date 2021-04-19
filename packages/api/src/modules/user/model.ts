import * as mongoose from 'mongoose';

import { ERROR_CODES, REGEXES } from './constants';

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      index: true,
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      maxlength: [32, ERROR_CODES.USERNAME_LONG],
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      maxlength: [64, ERROR_CODES.DISPLAYNAME_LONG],
      minlength: [3, ERROR_CODES.DISPLAYNAME_SHORT],
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IUser extends mongoose.Document {
  username: String;
  displayName: String;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
