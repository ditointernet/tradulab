import { model as Project } from '../project';
import { model as User } from '../user';
import { model as Role } from '../role';
import { ROLES, ROLES_LIST } from '../role/constants';
<<<<<<< HEAD
import { IRole } from './model';
import { ApolloError, ForbiddenError } from 'apollo-server-express';
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

async function projectUsers(parent, args) {
  const roles = await Role.find({ project: args.projectId })
    .populate('user')
    .exec();

  return roles;
}

async function inviteUserToProject(parent, args, context) {
  if (args.userId === context.user.id) {
    throw new ApolloError('You cannot invite yourself.');
  }

  const existingRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  });

  if (existingRole) {
    throw new ApolloError('The provided user is already part of the project.');
  }

  const targetProject = await Project.findById(args.projectId);

  if (!targetProject) {
    throw new ApolloError('The provided project does not exist.', 'PROJECT_NOT_FOUND');
  }

<<<<<<< HEAD
  const targetUser = await User.findById(args.userId);
=======
  console.log("chegou aqui antes do user")
  const user = await User.findById(args.userId);
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role

  if (!targetUser) {
    throw new ApolloError('The provided user does not exist.', 'USER_NOT_FOUND');
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
    throw new ForbiddenError('You cannot invite an user with the same or higher role.');
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
    throw new ForbiddenError('You cannot update your own role.');
  }

  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
    throw new ApolloError('The provided user is not part of the project.');
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
    throw new ForbiddenError(
      'You can not give the same or higher role than your own to an user.'
    );
  }

  if (!(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))) {
    throw new ForbiddenError(
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
}

async function removeUserFromProject(parent, args, context) {
  const targetUserRole = await Role.findOne({
    user: args.userId,
    project: args.projectId,
  })
    .populate('user')
    .exec();

  if (!targetUserRole) {
    throw new ApolloError('The provided user is not part of the project.');
  }

  if (args.userId === context.user.id && targetUserRole.role === ROLES.OWNER) {
    throw new ApolloError('You cannot remove your ownership from the project.');
  }

  if (args.userId !== context.user.id) {
    const currentUserRole = await Role.findOne({
      user: context.user.id,
      project: args.projectId,
    });

    if (
      !(await isCurrentRoleHigherThanTarget(currentUserRole, targetUserRole))
    ) {
      throw new ForbiddenError(
        'You can not remove someone with the same or higher role than your own.'
      );
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
