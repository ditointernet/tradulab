import * as mongoose from 'mongoose';
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
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> changes
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
import { IProject } from '../project/model';
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
=======
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
=======
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
=======
import { IProject } from '../project/model';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments

>>>>>>> file size limit from content length header
=======

>>>>>>> file size limit from content length header
=======
>>>>>>> changes
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
<<<<<<< HEAD
      type: String,
      enum: EXTENSION_LIST,
      required: true,
    },
<<<<<<< HEAD
    filename: {
=======
>>>>>>> changes
      type: String,
<<<<<<< HEAD
      index: true,
      required: true,
    },
    filePath: {
      type: String,
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    filename: {
      type: String,
      index: true,
      required: true,
    },
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
<<<<<<< HEAD
      required: true
>>>>>>> Criado o module files e a resolver create File
=======
    source_language: {
      type: String,
      required: true
>>>>>>> Criado o module files e a resolver create File
=======
    source_language: {
      type: String,
<<<<<<< HEAD
      required: true
>>>>>>> Criado o module files e a resolver create File
=======
      required: true,
>>>>>>> file size limit from content length header
=======
      required: true,
>>>>>>> file size limit from content length header
=======
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
>>>>>>> changes
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
<<<<<<< HEAD
      required: true,
<<<<<<< HEAD
=======
=======
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true,
<<<<<<< HEAD
>>>>>>> changes
      enum: EXTENSION_LIST,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    filePath: {
      type: String,
>>>>>>> Criado o module files e a resolver create File
    },
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
    source_language: {
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
      required:true,
=======
>>>>>>> changes
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
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  },
  {
    minimize: false,
    timestamps: true,
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export interface IFile extends mongoose.Document {
<<<<<<< HEAD
  extension: string;
  filename: string;
  filePath: string;
  sourceLanguage: string;
  project: mongoose.Types.ObjectId | IProject;
  createdAt: Date;
=======
  createdAt: Date;
  extension: string;
  filename: string;
  filePath: string;
  project: mongoose.Types.ObjectId | IProject;
  sourceLanguage: string;
>>>>>>> changes
  updateAt: Date;
<<<<<<< HEAD
<<<<<<< HEAD
}

const model = mongoose.model<IFile>('file', schema);

export default model;
=======
const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
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
=======
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
>>>>>>> Corrigido erro de cors pra qualquer request
const model = mongoose.model('file', schema);
=======
};
=======
}
>>>>>>> changes

const model = mongoose.model<IFile>('file', schema);
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments

export default model;
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
const model = mongoose.model('file', schema);

export default model;
>>>>>>> Criado o module files e a resolver create File
