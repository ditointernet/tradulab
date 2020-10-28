import { model as Project } from '../project';
import { model as User } from '../user';
import { model as Role } from '../role';
import { ROLES } from '../role/constants';

async function projectUsers(parent, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

async function inviteUserToProject(parent, args, context) {
  if (args.userId === context.user.id) {
    throw new Error('You cannot invite yourself.');
  }

  const existingRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  });

  if (existingRole) {
    throw new Error('The provided user is already part of the project.');
  }

  const project = await Project.findById(args.projectId);

  if (!project) {
    throw new Error('The provided project does not exist.');
  }

  const user = await User.findById(args.userId);

  if (!user) {
    throw new Error('The provided user does not exist.');
  }

  // TODO: i shouldnt be able to invite an user with the same or higher role

  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project,
    user,
  });

  try {
    await role.save();
  } catch (err) {
    await role.remove();
  }

  return role;
}

async function updateUserProjectRole(parent, args, context) {
  if (args.userId === context.user.id) {
    throw new Error('You cannot update your role.');
  }

  const role = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!role) {
    throw new Error('The provided user is not part of the project.');
  }

  if ([ROLES.MANAGER, ROLES.OWNER].includes(role.role)) {
    throw new Error(
      'You can not update someone with the same or higher role than your own.'
    );
  }

  try {
    await role.update({ role: ROLES[args.role.toUpperCase()] });
  } catch (err) {}

  return role;
}

async function removeUserFromProject(parent, args, context) {
  if (args.userId === context.user.id) {
    throw new Error('You cannot remove yourself from the project.');
  }

  const role = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!role) {
    throw new Error('The provided user is not part of the project.');
  }

  // TODO: i shouldnt be able to remove an user with the same or higher role

  try {
    await role.remove();
  } catch (err) {}

  return role.user;
}

export const queries = { projectUsers };
export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
