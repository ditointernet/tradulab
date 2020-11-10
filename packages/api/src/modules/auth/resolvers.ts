<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import TradulabError from '../../errors';
import { ERROR_CODES as authCodes } from './constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { env } from '../../helpers';
import { model as Auth } from '.';
import { model as User } from '../user';
=======
import { AuthenticationError, UserInputError } from 'apollo-server-express';
=======
=======
>>>>>>> changes
import {
  ApolloError,
  AuthenticationError,
  UserInputError,
} from 'apollo-server-express';
<<<<<<< HEAD
>>>>>>> changes
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
<<<<<<< HEAD
import { model as Auth } from '.';
import { model as User } from '../user';
import { env } from '../../helpers';
<<<<<<< HEAD
<<<<<<< HEAD
import { TradulabError } from '../../errors';
=======
=======

>>>>>>> Back-End Review
import TradulabError from '../../errors';
>>>>>>> update listFiles and error
import { ERROR_CODES as authCodes } from './constants';
import { ERROR_CODES as userCodes } from '../user/constants';
<<<<<<< HEAD
=======
>>>>>>> changes
<<<<<<< HEAD
>>>>>>> changes
=======
=======
import { env } from '../../helpers';
import { model as Auth } from '.';
import { model as User } from '../user';
>>>>>>> Back-End Review
>>>>>>> Back-End Review
=======
import { AuthenticationError, UserInputError } from 'apollo-server-express';
=======
>>>>>>> changes
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { model as Auth } from '.';
import { model as User } from '../user';
import { env } from '../../helpers';
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
async function createUser(
  _parent,
  { payload: { email, nickname, password, username } }
) {
  if (password.trim().length < 1)
<<<<<<< HEAD
    throw new TradulabError(authCodes.PASSWORD_EMPTY);

=======
async function createUser(_, args) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> changes
=======
async function createUser(_, args) {
>>>>>>> changes
  const user = new User({
    nickname,
    username,
  });

  const auth = new Auth({
    email: email.toLowerCase(),
    password: await encryptPassword(password),
    user: user.id,
=======
=======
>>>>>>> changes
  if (args.user.password.trim().length < 1) {
=======
>>>>>>> Back-End Review
    throw new TradulabError(authCodes.PASSWORD_EMPTY);

  const user = new User({
    nickname,
    username,
  });

  const user = new User({
    displayName: args.user.displayName || args.user.username,
    username: args.user.username,
  });

  const auth = new Auth({
<<<<<<< HEAD
<<<<<<< HEAD
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
    user,
>>>>>>> changes
=======
    email: email.toLowerCase(),
    password: await encryptPassword(password),
    user: user.id,
>>>>>>> Back-End Review
=======
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
    user,
>>>>>>> changes
  });

  try {
    await Promise.all([auth.save(), user.save()]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review

    return {
      email: auth.email,
      nickname: user.nickname,
      token: await signToken({ id: user.id }),
      username: user.username,
      id: user.id,
    };
<<<<<<< HEAD
=======
>>>>>>> changes
=======
>>>>>>> Back-End Review
  } catch (err) {
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
    // Não entendi a condição
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> update listFiles and error
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
    //  Duvidas sobre as linhas abaixo
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Add Apollo Erros, fix merge conflicts, removing comments
=======
>>>>>>> changes
=======
  } catch (err) {
    // Não entendi a condição
>>>>>>> changes
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
        case 'nickname':
          throw new TradulabError(userCodes.NICKNAME_ALREADY_IN_USE);
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
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
async function login(_parent, { payload: { email, password } }) {
  try {
    const auth = await Auth.findOne({
      email: email.toLowerCase(),
    })
      .populate('user')
      .exec();

    if (!auth || !(await verifyPassword(password, auth.password)))
      throw new TradulabError(authCodes.CREDENTIALS_INVALID);

    return {
      token: await signToken({ id: auth.user }),
      email: auth.email,
      nickname: auth.user.nickname,
      username: auth.user.username,
      id: auth.user.id,
    };
  } catch (err) {
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
=======
async function login(parent, args) {
=======
=======
>>>>>>> Back-End Review
async function login(_, args) {
>>>>>>> changes
=======
async function login(_, args) {
>>>>>>> changes
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
=======
>>>>>>> Criado o module files e a resolver create File
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> changes
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
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
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Corrigido erro de cors pra qualquer request
=======
async function login(_parent, { payload: { email, password } }) {
  try {
    const auth = await Auth.findOne({
      email: email.toLowerCase(),
    })
      .populate('user')
      .exec();
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    throw new AuthenticationError('Invalid credentials.');
  }
>>>>>>> Criado o module files e a resolver create File

    if (!auth || !(await verifyPassword(password, auth.password)))
      throw new TradulabError(authCodes.CREDENTIALS_INVALID);

    return {
      token: await signToken({ id: auth.user }),
      email: auth.email,
      nickname: auth.user.nickname,
      username: auth.user.username,
      id: auth.user.id,
    };
  } catch (err) {
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Back-End Review
  }
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
    throw new AuthenticationError('Invalid credentials.');
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
  }

  return { token: await signToken({ id: auth.user }) };
>>>>>>> changes
}
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
// Não acho legal este nomes e esta maneira de exportar
=======
=======
>>>>>>> erase comments

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> erase comments
=======
// Não acho legal este nomes e esta maneira de exportar
<<<<<<< HEAD
>>>>>>> pull
=======
>>>>>>> erase comments
=======

>>>>>>> erase comments
=======

>>>>>>> erase comments
=======
// Não acho legal este nomes e esta maneira de exportar
>>>>>>> pull
=======

>>>>>>> erase comments
export const queries = { login };
>>>>>>> pull
=======
>>>>>>> changes
=======

=======
=======
>>>>>>> pull
// Não acho legal este nomes e esta maneira de exportar
export const queries = { login };
>>>>>>> pull
>>>>>>> pull
=======
>>>>>>> changes
export const mutations = { createUser };
export const queries = { login };
