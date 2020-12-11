import * as mongoose from 'mongoose';
import { ROLES_LIST } from './constants';
import { IProject } from '../project/model';
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
    },
    role: {
      type: String,
      enum: ROLES_LIST,
      index: true,
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
    timestamps: true,
    minimize: false,
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
