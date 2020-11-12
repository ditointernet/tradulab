import * as mongoose from 'mongoose';
import * as slug from 'slug';

<<<<<<< HEAD
import { ERROR_CODES, REGEXES } from './constants';
<<<<<<< HEAD

=======
>>>>>>> we abstracted the role validation and finished all role mutations
=======
import { ERROR_MESSAGES, REGEXES } from './constants';
>>>>>>> we abstracted the role validation and finished all role mutations
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    name: {
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
      unique: true,
    },
    owner: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IProject extends mongoose.Document {
<<<<<<< HEAD
  name: String;
  private: Boolean;
  slug: String;
  owner: IUser | mongoose.Types.ObjectId;
=======
  slug: string;
  displayName: string;
  private: boolean;
  owner: mongoose.Types.ObjectId | IUser;
>>>>>>> we abstracted the role validation and finished all role mutations
  createdAt: Date;
  updateAt: Date;
}

schema.pre<IProject>('validate', function preValidate(next) {
<<<<<<< HEAD
  this.slug = slug(this.name);
=======
  this.slug = slug(this.displayName);
>>>>>>> we abstracted the role validation and finished all role mutations
  next();
});

const model = mongoose.model<IProject>('project', schema);

export default model;
