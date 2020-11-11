import {
  ApolloError,
  AuthenticationError,
  UserInputError,
} from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { model as Auth } from '.';
import { model as User } from '../user';
import { env } from '../../helpers';
<<<<<<< HEAD
import { TradulabError } from '../../errors';
import { ERROR_CODES as authCodes } from './constants';
import { ERROR_CODES as userCodes } from '../user/constants';
=======
>>>>>>> changes

function encryptPassword(password) {
  return bcrypt.hash(password, 10);
}

function verifyPassword(password, currentHash) {
  return bcrypt.compare(password, currentHash);
}

function signToken(payload) {
  const options = {
    expiresIn: process.env.NODE_ENV === 'production' ? '30m' : '1d',
  };

  return jwt.sign(payload, env.getOrThrow('JWT_SECRET'), options);
}

async function createUser(_, args) {
  if (args.user.password.trim().length < 1) {
    throw new TradulabError(authCodes.PASSWORD_EMPTY);
  }

  const user = new User({
    displayName: args.user.displayName || args.user.username,
    username: args.user.username,
  });

  const auth = new Auth({
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
    user,
  });

  try {
    await Promise.all([auth.save(), user.save()]);
  } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Não entendi a condição
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
    if (!auth.isNew) {
      await auth.remove();
    }
    await user.remove();

    console.error(JSON.stringify(err, null, 2));

    if (err.name === 'MongoError' && err.code === 11000) {
      const duplicatedField = Object.keys(err.keyPattern)[0];

      switch (duplicatedField) {
        case 'email':
          throw new TradulabError(authCodes.EMAIL_ALREADY_IN_USE);
        case 'username':
          throw new TradulabError(userCodes.USERNAME_ALREADY_IN_USE);
        default:
          throw err;
      }
    }

    if (err.errors) {
      const invalidField = Object.keys(err.errors)[0];
      const errorCode = err.errors[invalidField].properties.message;
      throw new TradulabError(errorCode);
    }

    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }

  return { token: await signToken({ id: user._id }) };
}

async function login(_, args) {
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    throw new TradulabError(authCodes.CREDENTIALS_INVALID);
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> changes
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    throw new AuthenticationError('Invalid credentials.');
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Corrigido erro de cors pra qualquer request
  }

  return { token: await signToken({ id: auth.user }) };
}
<<<<<<< HEAD

=======
// Não acho legal este nomes e esta maneira de exportar
export const queries = { login };
>>>>>>> pull
export const mutations = { createUser };
export const queries = { login };
