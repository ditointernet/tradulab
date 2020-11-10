import { UserInputError } from 'apollo-server-express';
import { model as Project } from '.';
import { model as Role } from '../role';
import { ROLES } from '../role/constants';

//Significado de context

async function createProject(parent, args, context) {
  const project = new Project({
    owner: context.user,
    displayName: args.displayName,
    private: args.private,
  });

  const role = new Role({
    role: ROLES.OWNER,
    user: context.user,
    project,
  });

  try {
    await Promise.all([project.save(), role.save()]);
  } catch (err) {
    await project.remove();
    await role.remove();

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

  return project;
}

//Duvidas populate

async function myProjects(parent, args, context) {
  const roles = await Role.find({ user: context.user })
    .populate('project')
    .exec();

  return roles;
}

export const queries = { myProjects };
export const mutations = { createProject };
