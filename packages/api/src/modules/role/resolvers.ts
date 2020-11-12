import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { IRole } from './model';
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes, ROLES, ROLES_LIST } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
=======
import { ROLES, ROLES_LIST } from '../role/constants';
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
import { IRole } from './model';
>>>>>>> we abstracted the role validation and finished all role mutations

async function projectUsers(_, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

async function inviteUserToProject(_, args, context) {
  if (args.userId === context.user.id) {
    throw new TradulabError(roleCodes.INVITED_YOURSELF);
  }

  const existingRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  });

  if (existingRole) {
    throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);
  }

  const targetProject = await Project.findById(args.projectId);

  if (!targetProject) {
<<<<<<< HEAD
    throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);
  }

<<<<<<< HEAD
  const targetUser = await User.findById(args.userId);
=======
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

  if (!targetUser) {
    throw new TradulabError(userCodes.USER_NOT_FOUND);
  }
<<<<<<< HEAD

  const targetUserRole = await Role.findOne({
    user: context.user.id,
    project: args.projectId,
  });

  const indexRole = ROLES_LIST.indexOf(targetUserRole.role);
  const availableRoles = ROLES_LIST.slice(indexRole + 1);

  if (!availableRoles.includes(args.role)) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }
=======
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    throw new Error('The provided project does not exist.');
  }

  const targetUser = await User.findById(args.userId);

  if (!targetUser) {
    throw new Error('The provided user does not exist.');
  }
>>>>>>> we tested everything and it seems ok, including a project fix

  const targetUserRole = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
  });

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
  });

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }

<<<<<<< HEAD
  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
  });

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
  });

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);
  }

  try {
    await targetUserRole.save();
  } catch (err) {
    console.error(err);
    throw err;
=======
  try {
    await targetUserRole.save();
  } catch (err) {
    await targetUserRole.remove();
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  return targetUserRole;
}

async function updateUserProjectRole(parent, args, context) {
  if (args.userId === context.user.id) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
    throw new Error('You cannot update your own role.');
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
=======
    throw new Error('The provided user is not part of the project.');
>>>>>>> Update Role
  }

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> we abstracted the role validation and finished all role mutations
  const inviteUserRole = new Role({
    user: args.userId,
    project: args.projectId,
    role: args.role,
  });
<<<<<<< HEAD

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, inviteUserRole))) {
    throw new TradulabError(roleCodes.UPDATED_TO_SAME_OR_HIGHER_ROLE);
  }

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new TradulabError(roleCodes.UPDATED_FROM_SAME_OR_HIGHER_ROLE);
  }

  try {
    targetUserRole.role = args.role;
    await targetUserRole.save();
  } catch (err) {
    console.error(err);
    throw err;
=======
=======
>>>>>>> we abstracted the role validation and finished all role mutations

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, inviteUserRole))) {
    throw new Error(
      'You can not give the same or higher role than your own to an user.'
    );
  }

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new Error(
      'You can not update someone with the same or higher role than your own.'
    );
  }

  try {
    targetUserRole.role = args.role;
    await targetUserRole.save();
  } catch (err) {
<<<<<<< HEAD
    console.error(err)
    throw err
>>>>>>> Update Role
=======
    console.error(err);
    throw err;
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  return targetUserRole;
}

async function removeUserFromProject(parent, args, context) {
  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);
=======
    throw new Error('The provided user is not part of the project.');
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new Error('You cannot remove your ownership from the project.');
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  if (args.userId !== context.user.id) {
    const currentUserRole = await Role.findOne({
      user: context.user.id,
      project: args.projectId,
    });

    if (
      !(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))
    ) {
<<<<<<< HEAD
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
=======
      throw new Error(
        'You can not remove someone with the same or higher role than your own.'
      );
>>>>>>> we abstracted the role validation and finished all role mutations
    }
  }

  try {
    await targetUserRole.remove();
<<<<<<< HEAD
  } catch (err) {
    console.error(err);
    throw err;
  }

  return targetUserRole.user;
}

async function isCurrentRoleHigherThanTarget(
  currentUserRole: IRole,
  targetUserRole: IRole
): Promise<boolean> {
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

=======
  } catch (err) {}

  return targetUserRole.user;
}

async function isCurrentRoleHigherThanTarget(
  currentUserRole: IRole,
  targetUserRole: IRole
): Promise<boolean> {
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

>>>>>>> we abstracted the role validation and finished all role mutations
  return currentUserRoleIndex < targetUserRoleIndex;
}

export const queries = { projectUsers };
export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
