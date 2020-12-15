import { AuthenticationError } from 'apollo-server-express';

// import { model as Auth } from '../auth';

async function me(_parent, _args, { user }) {
  // const auth = await Auth.find({ user: user._id });

  return user;
}

export const queries = { me };
