import * as mongoose from 'mongoose';

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
  key: string;
  file: mongoose.Types.ObjectId;
  text: string;
}

const model = mongoose.model<IPhrase>('phrase', schema);

export default model;
