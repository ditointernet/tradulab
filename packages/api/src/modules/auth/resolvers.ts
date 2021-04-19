import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import TradulabError from '../../errors';
import { ERROR_CODES as authCodes } from './constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { env } from '../../helpers';
import { model as Auth } from '.';
import { model as User } from '../user';
import { IUser } from '../user/model';

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

async function createUser(_parent, { email, password, username, displayName }) {
  if (password.trim().length < 1) {
    throw new TradulabError(authCodes.PASSWORD_EMPTY);
  }

  const user = new User({
    username,
    displayName,
  });

  const auth = new Auth({
    email: email.toLowerCase(),
    password: await encryptPassword(password),
    user: user.id,
  });

  try {
    await Promise.all([auth.save(), user.save()]);

    return {
      ...user.toObject(),
      email: auth.email,
      token: await signToken({ id: user.id }),
    };
  } catch (err) {
    await Promise.all([auth.remove(), user.remove()]);

    console.error(err);

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
}

async function login(_parent, { email, password }) {
  try {
    const auth = await Auth.findOne({
      email: email.toLowerCase(),
    })
      .populate('user')
      .exec();

    if (!auth || !(await verifyPassword(password, auth.password)))
      throw new TradulabError(authCodes.CREDENTIALS_INVALID);

    return {
      ...(auth.user as IUser).toObject(),
      email: auth.email,
      token: await signToken({ id: auth.user }),
    };
  } catch (err) {
    throw err;
  }
}

export const mutations = { createUser };
export const queries = { login };
