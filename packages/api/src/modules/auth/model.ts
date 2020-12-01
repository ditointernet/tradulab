import * as mongoose from 'mongoose';
import { IUser } from '../user/model';

import { ERROR_CODES, REGEXES } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      minlength: [6, ERROR_CODES.EMAIL_SHORT],
      maxlength: [254, ERROR_CODES.EMAIL_LONG],
      match: [REGEXES.EMAIL, ERROR_CODES.EMAIL_INVALID],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [1, ERROR_CODES.PASSWORD_EMPTY],
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IAuth extends mongoose.Document {
  user: mongoose.Types.ObjectId | IUser;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IAuth>('auth', schema);

export default model;
