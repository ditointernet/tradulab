import * as mongoose from 'mongoose';

import { IFile } from '../file/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    key: {
      type: String,
      index: true,
      required: true,
    },
    file: {
      type: Types.ObjectId,
      ref: 'file',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IPhrase extends mongoose.Document {
  file: IFile | mongoose.Types.ObjectId;
  text: String;
}

const model = mongoose.model<IPhrase>('phrase', schema);

export default model;
