import * as mongoose from 'mongoose';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
import { IProject } from '../project/model';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
import { IProject } from '../project/model';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments

import { EXTENSION_LIST } from './constants';
=======
>>>>>>> Rebase and resolving conflicts with master
import { IProject } from '../project/model';
=======
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======

>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
import { EXTENSION_LIST } from './constants';
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> file size limit from content length header

>>>>>>> file size limit from content length header
=======
>>>>>>> Rebase and resolving conflicts with master
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translationProgress: {
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translationProgress: {
>>>>>>> Rebase and resolving conflicts with master
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    approvalProgress: {
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    approvalProgress: {
>>>>>>> Rebase and resolving conflicts with master
      type: Number,
      min: [0, 'Out of range'],
      max: [1, 'Out of range'],
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Rebase and resolving conflicts with master
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
      required: true,
<<<<<<< HEAD
=======
    source_language: {
=======
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
<<<<<<< HEAD
      required: true
>>>>>>> Criado o module files e a resolver create File
=======
      required: true,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
=======
    source_language: {
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
      required: true
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
>>>>>>> file size limit from content length header
=======
>>>>>>> Rebase and resolving conflicts with master
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    filePath: {
      type: String,
    },
=======
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
    file_path: {
      type: String,
      required:true,
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
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
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    filePath: {
      type: String,
    },
>>>>>>> Rebase and resolving conflicts with master
  },
  {
    timestamps: true,
    minimize: false,
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Rebase and resolving conflicts with master
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
};
<<<<<<< HEAD

const model = mongoose.model<IFile>('file', schema);
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
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

<<<<<<< HEAD
const model = mongoose.model('file', schema);
>>>>>>> Corrigido erro de cors pra qualquer request

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export default model;
>>>>>>> file size limit from content length header
=======
export default model;
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
const model = mongoose.model('file', schema);
=======

const model = mongoose.model<IFile>('file', schema);
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments

export default model;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
=======
=======
=======
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

>>>>>>> Corrigido erro de cors pra qualquer request
const model = mongoose.model('file', schema);

export default model;
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> file size limit from content length header
>>>>>>> file size limit from content length header
=======
>>>>>>> Rebase and resolving conflicts with master
