import * as mongoose from 'mongoose';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
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
  file: mongoose.Types.ObjectId;
  text: String;
}

const model = mongoose.model<IPhrase>('phrase', schema);

export default model;
