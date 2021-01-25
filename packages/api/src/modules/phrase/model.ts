import * as mongoose from 'mongoose';

const { Types } = mongoose.Schema;

const phraseSchema = new mongoose.Schema(
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

const model = mongoose.model('phrase', phraseSchema);

export default model;
