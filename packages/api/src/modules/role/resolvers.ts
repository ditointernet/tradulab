<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError } from 'apollo-server-express';
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
=======
import { ApolloError, ForbiddenError } from 'apollo-server-express';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { IRole } from './model';
=======
import { ROLES, ROLES_LIST } from '../role/constants';
import { IRole } from './model';
<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError, ForbiddenError } from 'apollo-server-express';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
import { TradulabError } from '../../errors';
import { ERROR_CODES as roleCodes, ROLES, ROLES_LIST } from './constants';
>>>>>>> merge
=======
import TradulabError from '../../errors';
import { ERROR_CODES as roleCodes } from './constants';
>>>>>>> update listFiles and error
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
<<<<<<< HEAD
<<<<<<< HEAD
import { IRole } from './model';
import { model as Project } from '../project';
import { model as Role } from '../role';
<<<<<<< HEAD
import { model as User } from '../user';
import { ROLES, ROLES_LIST, ROLES_AVAILABLE_INVITE_USER } from './constants';
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
<<<<<<< HEAD
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
>>>>>>> we tested everything and it seems ok, including a project fix
=======
=======
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
import { IRole } from './model';
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
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
import { ROLES, ROLES_LIST } from './constants';
>>>>>>> Back-End Review

async function projectUsers(_, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

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

<<<<<<< HEAD
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
=======
  const targetProject = await Project.findById(args.projectId);

  if (!targetProject) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    throw new Error('The provided project does not exist.');
=======
<<<<<<< HEAD
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
    throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);
>>>>>>> we tested everything and it seems ok, including a project fix
  }

  const targetUser = await User.findById(args.userId);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> we tested everything and it seems ok, including a project fix
=======
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver

  if (!targetUser) {
    throw new Error('The provided user does not exist.');
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

  const targetUserRole = new Role({
=======
  console.log("chegou aqui sem erro do user")
  // TODO: i shouldnt be able to invite an user with the same or higher role
=======
    throw new Error('The provided project does not exist.');
=======
    throw new ApolloError(
      'The provided project does not exist.',
      'PROJECT_NOT_FOUND'
    );
>>>>>>> changes
  }
=======
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
>>>>>>> Back-End Review

  const targetUser = await User.findById(userId);

<<<<<<< HEAD
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
>>>>>>> we tested everything and it seems ok, including a project fix
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver

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
<<<<<<< HEAD
    throw new Error('You cannot invite an user with the same or higher role.');
  }

<<<<<<< HEAD
  const role = new Role({
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
<<<<<<< HEAD
  });

  const currentUserRole = await Role.findOne({
    user: context.user._id,
    project: args.projectId,
=======
>>>>>>> we tested everything and it seems ok, including a project fix
  });

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new Error('You cannot invite an user with the same or higher role.');
  }

<<<<<<< HEAD
  const role = new Role({
    role: ROLES[args.role.toUpperCase()],
    project: targetProject,
    user: targetUser,
<<<<<<< HEAD
>>>>>>> merge
=======
>>>>>>> we tested everything and it seems ok, including a project fix
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
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
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
=======
    throw new ForbiddenError(
      'You cannot invite an user with the same or higher role.'
    );
>>>>>>> changes
  }
}
=======
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
>>>>>>> Back-End Review

async function updateUserProjectRole(
  _parent,
  { payload: { userId, projectId, role } },
  { user: { _id: ownId } }
) {
  if (userId === ownId) throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();
    console.log('targetUserRole', targetUserRole);
    return targetUserRole;
  } catch (err) {
<<<<<<< HEAD
    await targetUserRole.remove();
=======
    console.error(err);
<<<<<<< HEAD
    throw err;
<<<<<<< HEAD
=======
  try {
    await targetUserRole.save();
  } catch (err) {
    await targetUserRole.remove();
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
>>>>>>> Back-End Review
  }
}

async function updateUserProjectRole(parent, args, context) {
  if (args.userId === context.user.id) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new Error('You cannot update your own role.');
=======
<<<<<<< HEAD
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
=======
    throw new Error('You cannot update your own role.');
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
  }
>>>>>>> we abstracted the role validation and finished all role mutations

  const targetUserRole = await Role.findOne({
<<<<<<< HEAD
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
=======
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new Error('The provided user is not part of the project.');
=======
<<<<<<< HEAD
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);
>>>>>>> Update Role
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

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new Error(
      'You can not update someone with the same or higher role than your own.'
    );
  }

  try {
    targetUserRole.role = args.role;
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
=======
async function removeUserFromProject(parent, args, context) {
  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
<<<<<<< HEAD
<<<<<<< HEAD
    throw new Error('The provided user is not part of the project.');
=======
<<<<<<< HEAD
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);
>>>>>>> we abstracted the role validation and finished all role mutations
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new Error('You cannot remove your ownership from the project.');
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
<<<<<<< HEAD
      throw new Error(
        'You can not remove someone with the same or higher role than your own.'
      );
=======
<<<<<<< HEAD
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
=======
      throw new Error(
        'You can not remove someone with the same or higher role than your own.'
      );
>>>>>>> we abstracted the role validation and finished all role mutations
>>>>>>> we abstracted the role validation and finished all role mutations
=======
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
    }
  }

  try {
    await targetUserRole.remove();
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (err) {}
=======
<<<<<<< HEAD
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
  } catch (err) {
    console.error(err);
    throw err;
  }
>>>>>>> we abstracted the role validation and finished all role mutations

  return targetUserRole.user;
}

async function isCurrentRoleHigherThanTarget(
  currentUserRole: IRole,
  targetUserRole: IRole
): Promise<boolean> {
  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

  return currentUserRoleIndex < targetUserRoleIndex;
>>>>>>> we abstracted the role validation and finished all role mutations
}

export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
<<<<<<< HEAD
};
export const queries = { projectUsers };
=======
};
<<<<<<< HEAD
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
export const queries = { projectUsers };
>>>>>>> Back-End Review
