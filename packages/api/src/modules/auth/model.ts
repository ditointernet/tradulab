import * as mongoose from 'mongoose';

import { ERROR_CODES, REGEXES } from './constants';
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      lowercase: true,
      match: [REGEXES.EMAIL, ERROR_CODES.EMAIL_INVALID],
      maxlength: [254, ERROR_CODES.EMAIL_LONG],
      minlength: [6, ERROR_CODES.EMAIL_SHORT],
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: [1, ERROR_CODES.PASSWORD_EMPTY],
      required: true,
    },
    user: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IAuth extends mongoose.Document {
  email: String;
  password: String;
  user: IUser;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IAuth>('auth', schema);

export default model;
