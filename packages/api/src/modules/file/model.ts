import * as mongoose from 'mongoose';
import { EXTENSION_LIST } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    filename: {
      type: String,
      index: true,
      required: true,
    },
    translationProgress: {
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
    approvalProgress: {
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true
    },
    project: {
      type: Types.ObjectId,
      ref: 'project',
      required: true,
      index: true,
    },
    extension: {
      type: String,
      required: true,
      enum: EXTENSION_LIST,
    },
    filePath: {
      type: String,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

// export interface IFile extends mongoose.Document {
//   filename: string;
//   translationProgress: number;
//   approvalProgress: number;
//   project: mongoose.Types.ObjectId | IProject;
//   sourceLanguage: string;
//   extension: string;
//   filePath: string;
//   createdAt: Date;
//   updateAt: Date;
// }

const model = mongoose.model('file', schema);

export default model;