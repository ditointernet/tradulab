import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { model as Auth } from '.';
import { model as User } from '../user';
import { env } from '../../helpers';
import { TradulabError } from '../../errors';
import { ERROR_CODES as authCodes } from './constants';
import { ERROR_CODES as userCodes } from '../user/constants';

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

async function createUser(parent, args) {
  const user = new User({
    username: args.user.username,
    displayName: args.user.displayName || args.user.username,
  });

  if (args.user.password.trim().length < 1) {
    throw new TradulabError(authCodes.PASSWORD_EMPTY);
  }

  const auth = new Auth({
    user,
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
  });

  try {
    await Promise.all([user.save(), auth.save()]);
  } catch (err) {
    //  Duvidas sobre as linhas abaixo
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

    throw err;
  }

  return { token: await signToken({ id: user._id }) };
}

async function login(parent, args) {
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
<<<<<<< HEAD
    throw new TradulabError(authCodes.CREDENTIALS_INVALID);
=======
    // Error sem estar na constant de error
    throw new Error('Invalid credentials.');
>>>>>>> Criado o module files e a resolver create File
  }

  return { token: await signToken({ id: auth.user }) };
}
// Não acho legal este nomes e esta maneira de exportar
export const queries = { login };
export const mutations = { createUser };
