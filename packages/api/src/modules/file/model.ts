import * as mongoose from 'mongoose';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { IProject } from '../project/model';
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
    filename: {
      type: String,
      index: true,
      required: true,
    },
    filePath: {
      type: String,
=======
<<<<<<< HEAD
<<<<<<< HEAD
    translationProgress: {
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
    approvalProgress: {
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
>>>>>>> Criado o module files e a resolver create File
      required: true,
    },
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
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
<<<<<<< HEAD
=======
      enum: EXTENSION_LIST,
    },
<<<<<<< HEAD
<<<<<<< HEAD
    filePath: {
      type: String,
>>>>>>> Criado o module files e a resolver create File
    },
=======
    file_path: {
      type: String,
      required:true,
    }
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
      required:true,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  },
  {
    minimize: false,
    timestamps: true,
  }
);

<<<<<<< HEAD
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
const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
