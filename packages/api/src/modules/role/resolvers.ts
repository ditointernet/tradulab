<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
=======
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { model as User } from '../user';
import { IRole } from './model';
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes, ROLES, ROLES_LIST } from './constants';
>>>>>>> merge
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { IRole } from './model';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { ROLES, ROLES_LIST, ROLES_AVAILABLE_INVITE_USER } from './constants';
=======
import { ROLES, ROLES_LIST } from '../role/constants';
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

async function projectUsers(_, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

<<<<<<< HEAD
async function inviteUserToProject(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.INVITED_YOURSELF);
=======
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
>>>>>>> merge

  const project = await Project.findById(projectId);

  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);

<<<<<<< HEAD
  const targetUser = await User.findById(userId);

  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);

<<<<<<< HEAD
  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
=======
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
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);

  if (!user) {
    throw new Error('The provided user does not exist.');
  }
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

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
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
>>>>>>> merge
  });

  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    project: projectId,
    user: ownId,
  });

  if (!currentUserRole)
    throw new TradulabError(roleCodes.INVITED_NOT_EXISTING_ROLE);

  if (!ROLES_AVAILABLE_INVITE_USER.includes(currentUserRole.role))
    throw new TradulabError(roleCodes.INVITED_NOT_AVAILABLE);

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);

  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();

    return targetUserRole;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

async function updateUserProjectRole(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.UPDATED_YOURSELF);

  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  }).exec();

  if (!targetUserRole)
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    user: ownId,
    project: projectId,
  });

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);
  const roleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= roleIndex)
    throw new TradulabError(roleCodes.UPDATED_TO_SAME_OR_HIGHER_ROLE);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.UPDATED_FROM_SAME_OR_HIGHER_ROLE);

  try {
    const inviteUserRole = await new Role({
      user: userId,
      project: projectId,
      role,
    }).save();

    return inviteUserRole;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

async function removeUserFromProject(
  _parent,
  { payload: { userId, projectId } },
  { user: { _id: ownId } }
) {
  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  });

  if (!targetUserRole)
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);

  if (userId === ownId && targetUserRole.role === ROLES.OWNER)
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);

  if (userId !== ownId) {
    const currentUserRole = await Role.findOne({
      user: ownId,
      project: projectId,
    });

    const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
    const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

    if (currentUserRoleIndex >= targetUserRoleIndex)
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
  }

  try {
    await targetUserRole.remove();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
export const queries = { projectUsers };
