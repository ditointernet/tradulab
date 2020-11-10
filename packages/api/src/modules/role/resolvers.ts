import { model as Project } from '../project';
import { model as User } from '../user';
import { model as Role } from '../role';
import { ROLES, ROLES_LIST } from '../role/constants';
<<<<<<< HEAD
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
<<<<<<< HEAD
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
=======
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

async function projectUsers(parent, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

async function inviteUserToProject(parent, args, context) {
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

  const targetUserRole = new Role({
=======
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role

  const roleDeQuemTaConvidando = await Role.findOne({
    user: context.user.id,
    project: args.projectId,
  });

  const indexRole = ROLES_LIST.indexOf(roleDeQuemTaConvidando.role)
  const rolesPossiveis = ROLES_LIST.slice(indexRole + 1)

  if (!rolesPossiveis.includes(args.role)) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }
  const role = new Role({
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
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
  }

  return targetUserRole;
}

async function updateUserProjectRole(parent, args, context) {
  if (args.userId === context.user.id) {
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
  }

  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
  }

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
  });

  const inviteUserRole = new Role({
    user: args.userId,
    project: args.projectId,
    role: args.role,
  });

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
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);
  }

  if (args.userId !== context.user.id) {
    const currentUserRole = await Role.findOne({
      user: context.user.id,
      project: args.projectId,
    });

    if (
      !(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))
    ) {
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
    }
  }

  try {
    await targetUserRole.remove();
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

  return currentUserRoleIndex < targetUserRoleIndex;
}

export const queries = { projectUsers };
export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
