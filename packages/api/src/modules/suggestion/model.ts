import * as mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {},
  {
    timestamps: true,
    minimize: false,
  }
);

const model = mongoose.model('suggestion', schema);

export default model;
