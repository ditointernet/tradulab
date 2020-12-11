import * as mongoose from 'mongoose';
import { IProject } from '../project/model';
import { EXTENSION_LIST } from './constants';
import { IProject } from '../project/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    extension: {
      type: String,
      enum: EXTENSION_LIST,
      required: true,
    },
    filename: {
      type: String,
      index: true,
      required: true,
    },
    filePath: {
      type: String,
<<<<<<< HEAD
      required: true,
=======
>>>>>>> feature/resolver-list-file
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true,
<<<<<<< HEAD
      enum: EXTENSION_LIST,
    },
    filePath: {
      type: String,
      required: true,
=======
>>>>>>> feature/resolver-list-file
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IFile extends mongoose.Document {
<<<<<<< HEAD
  filename: string;
  translationProgress: number;
  approvalProgress: number;
  project: mongoose.Types.ObjectId | IProject;
  sourceLanguage: string;
  extension: string;
  filePath: string;
  createdAt: Date;
=======
  createdAt: Date;
  extension: string;
  filename: string;
  filePath: string;
  project: mongoose.Types.ObjectId | IProject;
  sourceLanguage: string;
>>>>>>> feature/resolver-list-file
  updateAt: Date;
}

const model = mongoose.model<IFile>('file', schema);

export default model;
