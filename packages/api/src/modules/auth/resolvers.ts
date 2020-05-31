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
    expiresIn: '30m',
  };

  return jwt.sign(payload, env.getOrThrow('JWT_SECRET'), options);
}

async function createUser(parent, args) {
  const user = new User({
    username: args.user.username,
    displayName: args.user.displayName || args.user.username,
  });

  const auth = new Auth({
    user,
    email: args.user.email.toLowerCase(),
    password: await encryptPassword(args.user.password),
  });

  try {
    await Promise.all([user.save(), auth.save()]);
  } catch (err) {
    if (!auth.isNew) {
      await auth.remove();
    }

    await user.remove();

    throw err;
  }

  return { token: await signToken({ id: user._id }) };
}

async function login(parent, args) {
  const auth = await Auth.findOne({ email: args.email.toLowerCase() });

  if (!auth || !(await verifyPassword(args.password, auth.password))) {
    throw new Error('Invalid credentials.');
  }

  return { token: await signToken({ id: auth.user }) };
}

export const queries = { login };
export const mutations = { createUser };
