import * as mongoose from 'mongoose';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
=======
=======
import { ROLES_LIST } from './constants';
>>>>>>> changes
import { IProject } from '../project/model';
import { IUser } from '../user/model';
>>>>>>> we abstracted the role validation and finished all role mutations

<<<<<<< HEAD
import { ROLES_LIST } from './constants';
import { IProject } from '../project/model';
import { IUser } from '../user/model';

=======
import { ROLES_LIST } from './constants';
import { IProject } from '../project/model';
import { IUser } from '../user/model';

>>>>>>> changes
=======
>>>>>>> changes
const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    role: {
      type: String,
      enum: ROLES_LIST,
      index: true,
      required: true,
    },
=======
>>>>>>> changes
=======
>>>>>>> changes
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    },
=======
>>>>>>> Back-End Review
    role: {
      type: String,
      enum: ROLES_LIST,
      index: true,
      required: true,
>>>>>>> changes
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
=======
    },
    role: {
      type: String,
      enum: ROLES_LIST,
      index: true,
>>>>>>> changes
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

export interface IRole extends mongoose.Document {
  project: mongoose.Types.ObjectId | IProject;
  createdAt: Date;
  role: string;
  user: mongoose.Types.ObjectId | IUser;
  updateAt: Date;
}

const model = mongoose.model<IRole>('role', schema);

export default model;
