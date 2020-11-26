import * as mongoose from 'mongoose';
<<<<<<< HEAD

<<<<<<< HEAD
import { ERROR_CODES, REGEXES } from './constants';
=======
=======
>>>>>>> changes
import { ERROR_MESSAGES, REGEXES } from './constants';
>>>>>>> we abstracted the role validation and finished all role mutations

const schema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
<<<<<<< HEAD
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      maxlength: [32, ERROR_CODES.USERNAME_LONG],
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      unique: true,
=======
>>>>>>> changes
    },
    username: {
      type: String,
      index: true,
      match: [REGEXES.USERNAME, ERROR_MESSAGES.USERNAME_INVALID],
      maxlength: [32, ERROR_MESSAGES.USERNAME_LONG],
      minlength: [3, ERROR_MESSAGES.USERNAME_SHORT],
      required: true,
<<<<<<< HEAD
      minlength: [3, ERROR_CODES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_CODES.DISPLAY_NAME_LONG],
=======
      unique: [true, ERROR_MESSAGES.USERNAME_ALREADY_IN_USE],
>>>>>>> changes
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
