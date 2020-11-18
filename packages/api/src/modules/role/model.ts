import * as mongoose from 'mongoose';
import { IProject } from '../project/model';
import { IUser } from '../user/model';

import { ROLES_LIST } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    role: {
      type: String,
      index: true,
      required: true,
      enum: ROLES_LIST,
    },
    project: {
      type: Types.ObjectId,
      ref: 'project',
      required: true,
      index: true,
    },
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IRole extends mongoose.Document {
  role: string;
  project: mongoose.Types.ObjectId | IProject;
  user: mongoose.Types.ObjectId | IUser;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IRole>('role', schema);

export default model;
