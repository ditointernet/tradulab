import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { model as Auth } from '.';
import { model as User } from '../user';
import { env } from '../../helpers';
import { AuthenticationError, UserInputError } from 'apollo-server-express';

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
    throw new UserInputError('That password is too short.');
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

    console.error(err);

    if (err.message.includes(' validation failed: ')) {
      const invalidField = err.message.split(': ')[2].split(',')[0];
      throw new UserInputError(invalidField);
    }

    if (err.message.includes(' duplicate key error collection: ')) {
      const duplicatedField = err.message.split(': ')[3].slice(2);
      throw new UserInputError(`That ${duplicatedField} is already in use.`);
    }

    throw err;
  }

  return { token: await signToken({ id: user._id }) };
}

async function login(parent, args) {
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
<<<<<<< HEAD

    // // Error sem estar na constant de error
    // throw new Error('Invalid credentials.');

    throw new AuthenticationError('Invalid credentials.');
=======
    throw new AuthenticationError('Invalid credentials.');
  }
>>>>>>> feature/module-file-structure

  }
  
  return { token: await signToken({ id: auth.user }) };
}

export const queries = { login };
export const mutations = { createUser };
