import * as mongoose from 'mongoose';

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

const model = mongoose.model('role', schema);

export default model;
