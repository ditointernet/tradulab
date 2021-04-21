import TradulabError from '../../errors';
import { ERROR_CODES as projectCodes } from './constants';
import { ROLES } from '../role/constants';
import { model as Project } from '.';
import { model as Role } from '../role';
import { IRole } from '../role/model';
import {
  buildConnectionQuery,
  buildConnectionResponse,
  ConnectionArgs,
} from '../../helpers/mappers';

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
    await project.save();
    await role.save();

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

function getProjectBySlug(_parent, args: { slug: string }) {
  return Project.findOne({ slug: args.slug });
}

async function listMyProjects(_parent, args: ConnectionArgs, { user }) {
  const { where, limit } = buildConnectionQuery<IRole>(args);

  where.user = user;

  try {
    const roles = await Role.find(where)
      .limit(limit + 1)
      .sort('-createdAt')
      .populate('project')
      .exec();

    return buildConnectionResponse<IRole>(roles, limit);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = { createProject };
export const queries = { listMyProjects, getProjectBySlug };
