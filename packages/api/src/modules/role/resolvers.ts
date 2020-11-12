import { model as Project } from '../project';
import { model as User } from '../user';
import { model as Role } from '../role';
import { ROLES, ROLES_LIST } from '../role/constants';

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

  const targetProject = await Project.findById(args.projectId);

  if (!targetProject) {
    throw new Error('The provided project does not exist.');
  }

  const targetUser = await User.findById(args.userId);

  if (!targetUser) {
    throw new Error('The provided user does not exist.');
  }

  const currentUserRole = await Role.findOne({
    user: context.user.id,
    project: args.projectId,
  });

  const roleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const rolesToInvite = ROLES_LIST.slice(roleIndex + 1);

  if (!rolesToInvite.includes(args.role)) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }

  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
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

  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
    throw new Error('The provided user is not part of the project.');
  }

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
  });


  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);

  const inviteUserRoleIndex = ROLES_LIST.indexOf(args.role);

  if(inviteUserRoleIndex <= currentUserRoleIndex) {
    throw new Error(
      'You can not give the same or higher role to a user than your own.'
    );
  }

  if(targetUserRoleIndex <= currentUserRoleIndex) {
    throw new Error(
      'You can not update someone with the same or higher role than your own.'
    );
  }

  try {
    targetUserRole.role = args.role
    await targetUserRole.save();
  } catch (err) {
    console.error(err)
    throw err
  }

  return targetUserRole;
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
