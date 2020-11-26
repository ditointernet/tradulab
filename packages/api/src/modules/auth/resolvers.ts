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
import {
  ApolloError,
  AuthenticationError,
  UserInputError,
} from 'apollo-server-express';
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
async function createUser(
  _parent,
  { payload: { email, nickname, password, username } }
) {
  if (password.trim().length < 1)
    throw new TradulabError(authCodes.PASSWORD_EMPTY);

=======
async function createUser(_, args) {
<<<<<<< HEAD
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
  if (args.user.password.trim().length < 1) {
    throw new UserInputError('That password is too short.');
  }

  const user = new User({
    displayName: args.user.displayName || args.user.username,
    username: args.user.username,
  });

  const auth = new Auth({
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
    user,
>>>>>>> changes
  });

  try {
    await Promise.all([auth.save(), user.save()]);
<<<<<<< HEAD

    return {
      email: auth.email,
      nickname: user.nickname,
      token: await signToken({ id: user.id }),
      username: user.username,
      id: user.id,
    };
=======
>>>>>>> changes
  } catch (err) {
    // Não entendi a condição
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

<<<<<<< HEAD
<<<<<<< HEAD
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
=======
  if (!auth || !(await verifyPassword(args.password, auth.password))) {
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> changes
  }
}

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
async function login(_, args) {
>>>>>>> changes
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    throw new AuthenticationError('Invalid credentials.');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
    throw new TradulabError(authCodes.CREDENTIALS_INVALID);
=======
    throw new AuthenticationError('Invalid credentials.');
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
=======
>>>>>>> changes
    throw new AuthenticationError('Invalid credentials.');
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
    throw new TradulabError(authCodes.CREDENTIALS_INVALID);
>>>>>>> Corrigido erro de cors pra qualquer request
  }
<<<<<<< HEAD
=======

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
<<<<<<< HEAD

=======
// Não acho legal este nomes e esta maneira de exportar
=======

>>>>>>> erase comments
=======
// Não acho legal este nomes e esta maneira de exportar
>>>>>>> pull
=======

>>>>>>> erase comments
=======
// Não acho legal este nomes e esta maneira de exportar
>>>>>>> pull
=======

>>>>>>> erase comments
=======
// Não acho legal este nomes e esta maneira de exportar
>>>>>>> pull
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
export const mutations = { createUser };
export const queries = { login };
