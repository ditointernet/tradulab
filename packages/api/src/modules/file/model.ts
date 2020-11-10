import * as mongoose from 'mongoose';
<<<<<<< HEAD

import { EXTENSION_LIST } from './constants';
import { IProject } from '../project/model';
=======
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
    extension: {
      type: String,
      enum: EXTENSION_LIST,
      required: true,
    },
=======
>>>>>>> Criado o module files e a resolver create File
    filename: {
      type: String,
      index: true,
      required: true,
    },
<<<<<<< HEAD
    filePath: {
      type: String,
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true,
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IFile extends mongoose.Document {
  extension: string;
  filename: string;
  filePath: string;
  sourceLanguage: string;
  project: mongoose.Types.ObjectId | IProject;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IFile>('file', schema);

export default model;
=======
    translation_progress: {
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
    approval_progress: {
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
    source_language: {
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
    file_path: {
      type: String,
      required:true,
    }
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
