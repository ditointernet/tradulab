<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
=======
=======
>>>>>>> Back-End Review
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { IRole } from './model';
<<<<<<< HEAD
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes, ROLES, ROLES_LIST } from './constants';
<<<<<<< HEAD
>>>>>>> merge
=======
=======
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
>>>>>>> update listFiles and error
>>>>>>> update listFiles and error
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
<<<<<<< HEAD
import { IRole } from './model';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { model as User } from '../user';
import { ROLES, ROLES_LIST, ROLES_AVAILABLE_INVITE_USER } from './constants';
=======
=======
import { ROLES, ROLES_LIST } from '../role/constants';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
import { IRole } from './model';
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
>>>>>>> we tested everything and it seems ok, including a project fix
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
=======
import { ApolloError } from 'apollo-server-express';
=======
>>>>>>> update listFiles and error
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
<<<<<<< HEAD
>>>>>>> Back-End Review
=======
=======
import { ROLES, ROLES_LIST, ROLES_AVAILABLE_INVITE_USER } from './constants';
>>>>>>> Roles
>>>>>>> Roles
=======
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
>>>>>>> merge
=======
import { ROLES, ROLES_LIST } from '../role/constants';
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

async function projectUsers(_, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
async function inviteUserToProject(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (userId === ownId) throw new TradulabError(roleCodes.INVITED_YOURSELF);
=======
=======
>>>>>>> merge
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
=======
  console.log(
    'userId, projectId, role',
    userId,
    projectId,
    role,
    'ownId',
    ownId
  );
=======
>>>>>>> Roles
  if (userId === ownId) throw new TradulabError(roleCodes.INVITED_YOURSELF);
>>>>>>> Back-End Review

<<<<<<< HEAD
  const project = await Project.findById(projectId);

<<<<<<< HEAD
<<<<<<< HEAD
  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);
=======
=======
>>>>>>> Back-End Review
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
=======
  const targetProject = await Project.findById(args.projectId);

  if (!targetProject) {
<<<<<<< HEAD
    throw new Error('The provided project does not exist.');
>>>>>>> we tested everything and it seems ok, including a project fix
  }
>>>>>>> we tested everything and it seems ok, including a project fix

<<<<<<< HEAD
<<<<<<< HEAD
  const targetUser = await User.findById(userId);

<<<<<<< HEAD
  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);
=======
<<<<<<< HEAD
  const targetUser = await User.findById(args.userId);
=======
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

  if (!targetUser) {
<<<<<<< HEAD
    throw new TradulabError(userCodes.USER_NOT_FOUND);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

<<<<<<< HEAD
  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
=======
  const targetUserRole = await Role.findOne({
    user: context.user.id,
    project: args.projectId,
=======
=======
  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);

  const targetUser = await User.findById(userId);

  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);
>>>>>>> Back-End Review

  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
>>>>>>> Back-End Review
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
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    throw new Error('The provided project does not exist.');
  }

  const targetUser = await User.findById(args.userId);

<<<<<<< HEAD
  if (!targetUser) {
    throw new Error('The provided user does not exist.');
=======
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
>>>>>>> changes
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix

  const targetUserRole = await Role.findOne({
=======
  const roleDeQuemTaConvidando = await Role.findOne({
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
  const targetUser = await User.findById(args.userId);

  if (!targetUser) {
<<<<<<< HEAD
    throw new Error('The provided user does not exist.');
=======
    throw new ApolloError(
      'The provided user does not exist.',
      'USER_NOT_FOUND'
    );
>>>>>>> changes
  }

  const targetUserRole = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
  });

  const currentUserRole = await Role.findOne({
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
    user: context.user.id,
    project: args.projectId,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  const indexRole = ROLES_LIST.indexOf(targetUserRole.role);
  const availableRoles = ROLES_LIST.slice(indexRole + 1);

  if (!availableRoles.includes(args.role)) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }

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
<<<<<<< HEAD
    throw new Error('You cannot invite an user with the same or higher role.');
  }

<<<<<<< HEAD
=======
  const indexRole = ROLES_LIST.indexOf(roleDeQuemTaConvidando.role)
  const rolesPossiveis = ROLES_LIST.slice(indexRole + 1)
=======
  const roleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const rolesToInvite = ROLES_LIST.slice(roleIndex + 1);
>>>>>>> we tested everything and it seems ok, including a project fix

  if (!rolesToInvite.includes(args.role)) {
=======
    user: context.user._id,
    project: args.projectId,
  });

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
    throw new Error('You cannot invite an user with the same or higher role.');
  }
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
<<<<<<< HEAD
>>>>>>> merge
=======
>>>>>>> we tested everything and it seems ok, including a project fix
  });
=======
  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);
>>>>>>> Back-End Review

  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    project: projectId,
    user: ownId,
  });

  if (!currentUserRole)
    throw new TradulabError(roleCodes.INVITED_NOT_EXISTING_ROLE);

<<<<<<< HEAD
<<<<<<< HEAD
  if (!ROLES_AVAILABLE_INVITE_USER.includes(currentUserRole.role))
    throw new TradulabError(roleCodes.INVITED_NOT_AVAILABLE);

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);
<<<<<<< HEAD
=======
=======
=======
  if (!ROLES_AVAILABLE_INVITE_USER.includes(currentUserRole.role))
    throw new TradulabError(roleCodes.INVITED_NOT_AVAILABLE);

>>>>>>> Roles
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);
<<<<<<< HEAD
>>>>>>> Back-End Review
=======
    throw new ForbiddenError(
      'You cannot invite an user with the same or higher role.'
    );
>>>>>>> changes
=======
    throw new ForbiddenError(
      'You cannot invite an user with the same or higher role.'
    );
>>>>>>> changes
  }
<<<<<<< HEAD
>>>>>>> changes
=======
=======
>>>>>>> Back-End Review
>>>>>>> Back-End Review

  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();
<<<<<<< HEAD
<<<<<<< HEAD

=======
    console.log('targetUserRole', targetUserRole);
>>>>>>> Back-End Review
=======

>>>>>>> Roles
    return targetUserRole;
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
=======
=======
>>>>>>> Back-End Review
    throw err;
=======
=======
>>>>>>> we abstracted the role validation and finished all role mutations
  try {
    await targetUserRole.save();
  } catch (err) {
    await targetUserRole.remove();
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Back-End Review
>>>>>>> Back-End Review
  }
=======
  }

  return targetUserRole;
>>>>>>> we abstracted the role validation and finished all role mutations
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
async function updateUserProjectRole(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
async function updateUserProjectRole(parent, args, context) {
=======
=======
>>>>>>> Roles
async function updateUserProjectRole(_parent, args, context) {
>>>>>>> Roles
  if (args.userId === context.user.id) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
    throw new Error('You cannot update your own role.');
>>>>>>> we abstracted the role validation and finished all role mutations
=======
    throw new Error('You cannot update your own role.');
>>>>>>> we abstracted the role validation and finished all role mutations
  }
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
async function updateUserProjectRole(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.UPDATED_YOURSELF);
>>>>>>> Roles
>>>>>>> Roles

  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  }).exec();

<<<<<<< HEAD
<<<<<<< HEAD
  if (!targetUserRole)
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
=======
=======
>>>>>>> Roles
  if (!targetUserRole) {
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
=======
    throw new Error('The provided user is not part of the project.');
>>>>>>> Update Role
  }
<<<<<<< HEAD
>>>>>>> Update Role
=======
=======
  if (!targetUserRole)
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
>>>>>>> Roles
>>>>>>> Roles

  const currentUserRole = await Role.findOne({
    user: ownId,
    project: projectId,
  });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);
  const roleIndex = ROLES_LIST.indexOf(role);
=======
<<<<<<< HEAD
=======
=======
>>>>>>> Roles
<<<<<<< HEAD
=======
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
  const inviteUserRole = new Role({
=======
  const targetUserRole = await Role.findOne({
>>>>>>> Update Role
    user: args.userId,
    project: args.projectId,
    role: args.role,
  });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Update Role
=======
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);
  const roleIndex = ROLES_LIST.indexOf(role);
>>>>>>> Roles
>>>>>>> Roles

<<<<<<< HEAD
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
<<<<<<< HEAD
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
=======
=======
>>>>>>> Roles
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
=======
  if (!targetUserRole) {
    throw new Error('The provided user is not part of the project.');
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
    throw new Error(
      'You can not give the same or higher role than your own to an user.'
    );
  }

<<<<<<< HEAD
  if(targetUserRoleIndex <= currentUserRoleIndex) {
>>>>>>> Update Role
=======
  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
>>>>>>> we abstracted the role validation and finished all role mutations
    throw new Error(
      'You can not update someone with the same or higher role than your own.'
    );
  }

  try {
<<<<<<< HEAD
<<<<<<< HEAD
    targetUserRole.role = args.role;
    await targetUserRole.save();
  } catch (err) {
<<<<<<< HEAD
    console.error(err)
    throw err
>>>>>>> Update Role
<<<<<<< HEAD
>>>>>>> Update Role
=======
=======
    console.error(err);
    throw err;
>>>>>>> we abstracted the role validation and finished all role mutations
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Roles
>>>>>>> Roles
  }
=======
    targetUserRole.role = args.role
=======
    targetUserRole.role = args.role;
>>>>>>> we abstracted the role validation and finished all role mutations
    await targetUserRole.save();
  } catch (err) {
    console.error(err);
    throw err;
  }

  return targetUserRole;
>>>>>>> Update Role
}

<<<<<<< HEAD
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
<<<<<<< HEAD
  if (!targetUserRole)
=======
  if (!targetUserRole) {
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
  if (!targetUserRole) {
<<<<<<< HEAD
=======
  if (!targetUserRole)
>>>>>>> Roles
>>>>>>> Roles
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);

  if (userId === ownId && targetUserRole.role === ROLES.OWNER)
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Roles
=======
=======
async function removeUserFromProject(parent, args, context) {
  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
>>>>>>> we abstracted the role validation and finished all role mutations
    throw new Error('The provided user is not part of the project.');
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new Error('You cannot remove your ownership from the project.');
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
  }
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
>>>>>>> Roles
>>>>>>> Roles

  if (userId !== ownId) {
    const currentUserRole = await Role.findOne({
      user: ownId,
      project: projectId,
    });

<<<<<<< HEAD
<<<<<<< HEAD
    const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
    const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

    if (currentUserRoleIndex >= targetUserRoleIndex)
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
=======
=======
>>>>>>> Roles
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
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
    const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
    const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

    if (currentUserRoleIndex >= targetUserRoleIndex)
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
>>>>>>> Roles
>>>>>>> Roles
=======
  }

  if (args.userId !== context.user.id) {
    const currentUserRole = await Role.findOne({
      user: context.user.id,
      project: args.projectId,
    });

    if (
      !(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))
    ) {
      throw new Error(
        'You can not remove someone with the same or higher role than your own.'
      );
    }
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  try {
    await targetUserRole.remove();
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (err) {
    console.error(err);
    throw err;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

  return targetUserRole.user;
>>>>>>> Roles
}

<<<<<<< HEAD
=======
async function isCurrentRoleHigherThanTarget(
  currentUserRole: IRole,
  targetUserRole: IRole
): Promise<boolean> {
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

=======
=======
>>>>>>> we abstracted the role validation and finished all role mutations
  } catch (err) {}

  return targetUserRole.user;
}

async function isCurrentRoleHigherThanTarget(
  currentUserRole: IRole,
  targetUserRole: IRole
): Promise<boolean> {
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
  return currentUserRoleIndex < targetUserRoleIndex;
=======
>>>>>>> Roles
=======
  return currentUserRoleIndex < targetUserRoleIndex;
>>>>>>> we abstracted the role validation and finished all role mutations
}

<<<<<<< HEAD
export const queries = { projectUsers };
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> Back-End Review
export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
export const queries = { projectUsers };
