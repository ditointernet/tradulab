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
  });

  try {
    await Promise.all([auth.save(), user.save()]);
  } catch (err) {
    // Não entendi a condição
    if (!auth.isNew) {
      await auth.remove();
    }

    await user.remove();

    console.error(err);

    if (err.message.includes(' validation failed: ')) {
      const invalidField = err.message.split(': ')[2].split(',')[0];
      throw new UserInputError(invalidField);
    }

    if (err.message.includes(' duplicate key error collection: ')) {
      const duplicatedField = err.message.split(': ')[3].slice(2);
      throw new UserInputError(`That ${duplicatedField} is already in use.`);
    }

    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }

  return { token: await signToken({ id: user._id }) };
}

async function login(_, args) {
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
    throw new AuthenticationError('Invalid credentials.');
  }

  return { token: await signToken({ id: auth.user }) };
}

export const mutations = { createUser };
export const queries = { login };
