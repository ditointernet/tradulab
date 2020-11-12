import { model as Project } from '.';
import { model as Role } from '../role';
import { ROLES } from '../role/constants';

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

    throw err;
  }

  return project;
}

async function myProjects(parent, args, context) {
  const roles = await Role.find({ user: context.user })
    .populate('project')
    .exec();

  return roles;
}

export const queries = { myProjects };
export const mutations = { createProject };
