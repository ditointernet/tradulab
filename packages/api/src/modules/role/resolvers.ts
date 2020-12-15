import { ApolloError } from 'apollo-server-express';
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { IRole } from './model';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { model as User } from '../user';
import { ROLES, ROLES_LIST } from './constants';

async function projectUsers(_, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

async function inviteUserToProject(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  console.log(
    'userId, projectId, role',
    userId,
    projectId,
    role,
    'ownId',
    ownId
  );
  if (userId === ownId) throw new TradulabError(roleCodes.INVITED_YOURSELF);

  const project = await Project.findById(projectId);

  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);

  const targetUser = await User.findById(userId);

  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);

  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
  });

  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    project: projectId,
    user: ownId,
  });

  if (!currentUserRole)
    throw new TradulabError(roleCodes.INVITED_NOT_EXISTING_ROLE);

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex < targetUserRoleIndex)
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);

  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();
    console.log('targetUserRole', targetUserRole);
    return targetUserRole;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
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

export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
export const queries = { projectUsers };
