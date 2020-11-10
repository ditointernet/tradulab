import * as mongoose from 'mongoose';
<<<<<<< HEAD
<<<<<<< HEAD
import { IProject } from '../project/model';
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
import { EXTENSION_LIST } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    filename: {
      type: String,
      index: true,
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    translationProgress: {
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
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
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    sourceLanguage: {
      type: String,
      required: true,
=======
    source_language: {
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
      required: true
>>>>>>> Criado o module files e a resolver create File
=======
    source_language: {
      type: String,
      required: true
>>>>>>> Criado o module files e a resolver create File
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
    filePath: {
      type: String,
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
  },
  {
    timestamps: true,
    minimize: false,
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
export interface IFile extends mongoose.Document {
  filename: string;
  translationProgress: number;
  approvalProgress: number;
  project: mongoose.Types.ObjectId | IProject;
  sourceLanguage: string;
  extension: string;
  filePath: string;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IFile>('file', schema);

export default model;
=======
const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
=======
const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
