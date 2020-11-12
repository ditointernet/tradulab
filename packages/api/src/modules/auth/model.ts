import * as mongoose from 'mongoose';
import { IUser } from '../user/model';

import { ERROR_CODES, REGEXES } from './constants';
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      lowercase: true,
      match: [REGEXES.EMAIL, ERROR_CODES.EMAIL_INVALID],
      maxlength: [254, ERROR_CODES.EMAIL_LONG],
      minlength: [6, ERROR_CODES.EMAIL_SHORT],
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: [1, ERROR_CODES.PASSWORD_EMPTY],
      required: true,
    },
    user: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IAuth extends mongoose.Document {
<<<<<<< HEAD
  email: String;
  password: String;
  user: IUser;
  createdAt: Date;
  updateAt: Date;
};
=======
  user: mongoose.Types.ObjectId | IUser;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> we abstracted the role validation and finished all role mutations
=======
};
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
};
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
};
=======
}
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
};
>>>>>>> Rebase and resolving conflicts with master
=======
};
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
};
=======
}
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
};
>>>>>>> Rebase and resolving conflicts with master
=======
};
=======
}
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations

const model = mongoose.model<IAuth>('auth', schema);

export default model;
