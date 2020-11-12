import * as mongoose from 'mongoose';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { EXTENSION_LIST } from './constants';
import { IProject } from '../project/model';
=======
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File
=======
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File
=======
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    extension: {
      type: String,
      enum: EXTENSION_LIST,
      required: true,
    },
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
    filename: {
      type: String,
      index: true,
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    approvalProgress: {
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    sourceLanguage: {
=======
    source_language: {
>>>>>>> Criado o module files e a resolver create File
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    source_language: {
>>>>>>> Criado o module files e a resolver create File
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    filePath: {
      type: String,
      required:true,
    },
=======
=======
>>>>>>> Criado o module files e a resolver create File
    file_path: {
      type: String,
      required:true,
    }
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
      required:true,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
      required:true,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const model = mongoose.model('file', schema);

<<<<<<< HEAD
<<<<<<< HEAD
export default model;
>>>>>>> Criado o module files e a resolver create File
=======
export default model;
>>>>>>> Criado o module files e a resolver create File
=======
export default model;
>>>>>>> Criado o module files e a resolver create File
