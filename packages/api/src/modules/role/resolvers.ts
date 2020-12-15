<<<<<<< HEAD
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { IRole } from './model';
<<<<<<< HEAD
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes, ROLES, ROLES_LIST } from './constants';
=======
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
>>>>>>> update listFiles and error
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
=======
import { ROLES, ROLES_LIST } from '../role/constants';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
import { IRole } from './model';
>>>>>>> we abstracted the role validation and finished all role mutations
=======
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
>>>>>>> we tested everything and it seems ok, including a project fix
=======
import { ApolloError } from 'apollo-server-express';
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { IRole } from './model';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { model as User } from '../user';
<<<<<<< HEAD
import { ROLES, ROLES_LIST } from './constants';
>>>>>>> Back-End Review
=======
import { ROLES, ROLES_LIST, ROLES_AVAILABLE_INVITE_USER } from './constants';
>>>>>>> Roles

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
  if (userId === ownId) throw new TradulabError(roleCodes.INVITED_YOURSELF);

  const project = await Project.findById(projectId);

<<<<<<< HEAD
  if (!targetProject) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);
=======
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
>>>>>>> changes
  }

<<<<<<< HEAD
  const targetUser = await User.findById(args.userId);
=======
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

  if (!targetUser) {
<<<<<<< HEAD
    throw new TradulabError(userCodes.USER_NOT_FOUND);
  }
<<<<<<< HEAD
=======
  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);

  const targetUser = await User.findById(userId);

  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);
>>>>>>> Back-End Review

  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
  });

<<<<<<< HEAD
  const indexRole = ROLES_LIST.indexOf(targetUserRole.role);
  const availableRoles = ROLES_LIST.slice(indexRole + 1);

  if (!availableRoles.includes(args.role)) {
    throw new Error('You cannot invite an user with the same or higher role.');
=======
    throw new ApolloError(
      'The provided user does not exist.',
      'USER_NOT_FOUND'
    );
>>>>>>> changes
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
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
<<<<<<< HEAD
    throw new Error('You cannot invite an user with the same or higher role.');
  }

<<<<<<< HEAD
  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
  });
=======
  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);
>>>>>>> Back-End Review

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
<<<<<<< HEAD
=======
    throw new ForbiddenError(
      'You cannot invite an user with the same or higher role.'
    );
>>>>>>> changes
  }
=======
>>>>>>> Back-End Review

  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();

    return targetUserRole;
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    throw err;
=======
  try {
    await targetUserRole.save();
  } catch (err) {
    await targetUserRole.remove();
>>>>>>> we abstracted the role validation and finished all role mutations
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Back-End Review
  }
}

<<<<<<< HEAD
async function updateUserProjectRole(_parent, args, context) {
  if (args.userId === context.user.id) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
    throw new Error('You cannot update your own role.');
>>>>>>> we abstracted the role validation and finished all role mutations
  }
=======
async function updateUserProjectRole(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.UPDATED_YOURSELF);
>>>>>>> Roles

  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  }).exec();

<<<<<<< HEAD
  if (!targetUserRole) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
=======
    throw new Error('The provided user is not part of the project.');
>>>>>>> Update Role
  }
=======
  if (!targetUserRole)
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
>>>>>>> Roles

  const currentUserRole = await Role.findOne({
    user: ownId,
    project: projectId,
  });

<<<<<<< HEAD
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
=======
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);
  const roleIndex = ROLES_LIST.indexOf(role);
>>>>>>> Roles

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
<<<<<<< HEAD
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
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Roles
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

<<<<<<< HEAD
  if (!targetUserRole) {
<<<<<<< HEAD
=======
  if (!targetUserRole)
>>>>>>> Roles
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);

  if (userId === ownId && targetUserRole.role === ROLES.OWNER)
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);
<<<<<<< HEAD
=======
    throw new Error('The provided user is not part of the project.');
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new Error('You cannot remove your ownership from the project.');
>>>>>>> we abstracted the role validation and finished all role mutations
  }
=======
>>>>>>> Roles

  if (userId !== ownId) {
    const currentUserRole = await Role.findOne({
      user: ownId,
      project: projectId,
    });

<<<<<<< HEAD
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
=======
    const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
    const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

    if (currentUserRoleIndex >= targetUserRoleIndex)
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
>>>>>>> Roles
  }

  try {
    await targetUserRole.remove();
<<<<<<< HEAD
  } catch (err) {
    console.error(err);
    throw err;
  }
<<<<<<< HEAD

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
=======
>>>>>>> Roles
}

export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
export const queries = { projectUsers };
