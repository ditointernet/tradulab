import { ApolloError } from 'apollo-server-express';

import TradulabError from '../../errors';
import { ERROR_CODES as projectCodes } from './constants';
import { ROLES } from '../role/constants';
import { model as Project } from '.';
import { model as Role } from '../role';

async function createProject(_parent, { name, private: isPrivate }, { user }) {
  const project = new Project({
    name,
    owner: user,
    private: isPrivate || false,
  });

  const role = new Role({
    project,
    role: ROLES.OWNER,
    user,
  });

  try {
    await Promise.all([project.save(), role.save()]);

    return project;
  } catch (err) {
    await Promise.all([project.remove(), role.remove()]);

    console.error(err);

    if (err.name === 'MongoError' && err.code === 11000) {
      const duplicatedField = Object.keys(err.keyPattern)[0];

      switch (duplicatedField) {
        case 'slug':
          throw new TradulabError(projectCodes.SLUG_ALREADY_IN_USE);
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

async function listProjects(_parent, _args, { user }) {
  try {
    const roles = await Role.find({ user }).populate('project').exec();

    return roles;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = { createProject };
export const queries = { listProjects };
