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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> file size limit from content length header
import { IProject } from '../project/model';
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Rebase and resolving conflicts with master
import { IProject } from '../project/model';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
import { IProject } from '../project/model';
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments

>>>>>>> file size limit from content length header
=======

>>>>>>> file size limit from content length header
=======
>>>>>>> changes
=======

>>>>>>> Back-End Review
import { EXTENSION_LIST } from './constants';
import { IProject } from '../project/model';
=======
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
    extension: {
      type: String,
<<<<<<< HEAD
      index: true,
      required: true,
    },
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
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: {
=======
    translation_progress: {
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
    translationProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    translationProgress: {
>>>>>>> Rebase and resolving conflicts with master
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
=======
    approvalProgress: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    approvalProgress: {
=======
    approval_progress: {
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    approvalProgress: {
>>>>>>> Rebase and resolving conflicts with master
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
<<<<<<< HEAD
      required: true
>>>>>>> Criado o module files e a resolver create File
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
=======
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
=======
>>>>>>> Back-End Review
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    filePath: {
      type: String,
    },
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
    source_language: {
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Rebase and resolving conflicts with master
    sourceLanguage: {
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      type: String,
      required: true,
=======
    source_language: {
      type: String,
      required: true
>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
    filePath: {
      type: String,
=======
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
>>>>>>> Back-End Review
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Criado o module files e a resolver create File
    filePath: {
      type: String,
      required:true,
=======
>>>>>>> changes
    },
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
=======
=======
>>>>>>> Criado o module files e a resolver create File
    file_path: {
      type: String,
      required:true,
    }
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
    filePath: {
      type: String,
    },
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    filePath: {
      type: String,
    },
>>>>>>> Rebase and resolving conflicts with master
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
export interface IFile extends mongoose.Document {
<<<<<<< HEAD
  createdAt: Date;
  extension: string;
  filename: string;
  filePath: string;
  project: mongoose.Types.ObjectId | IProject;
  sourceLanguage: string;
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
=======
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
=======
  extension: string;
  filename: string;
  filePath: string;
  sourceLanguage: string;
  project: mongoose.Types.ObjectId | IProject;
>>>>>>> Back-End Review
  createdAt: Date;
  updateAt: Date;
};

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
=======
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
