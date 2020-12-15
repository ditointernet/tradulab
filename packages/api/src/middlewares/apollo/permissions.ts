<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { not, rule, shield } from 'graphql-shield';
=======
=======
>>>>>>> Back-End Review
import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-express';
import { not, and, or, rule, shield } from 'graphql-shield';

import { role } from '../../modules';
import { model as userModel } from '../../modules/user';
import { ROLES } from '../../modules/role/constants';
<<<<<<< HEAD
>>>>>>> Back-End Review
=======
import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { not, rule, shield } from 'graphql-shield';
>>>>>>> Roles
=======
>>>>>>> Back-End Review

const isAuthenticated = rule()(async (_parent, _args, { user }) => {
  if (!user) return new AuthenticationError('You must be logged in.');

  return true;
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const permissions = shield(
  {
    Query: {
      listFiles: isAuthenticated,
=======
=======
>>>>>>> Back-End Review
const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (_parent, { projectId }, { user: { id: currentUserId } }) => {
    try {
      const projectRole = await role.model.findOne({
        project: projectId,
        user: currentUserId,
      });

      if (projectRole && allowedRoles.includes(projectRole.role)) return true;

      return new ForbiddenError(
        'You must be owner or manager in this project or this project doesnt exit.'
      );
    } catch (err) {
      console.error(err);
      return err;
    }
  });

const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);

const permissions = shield(
  {
    Query: {
      //   listFiles: isAuthenticated,
<<<<<<< HEAD
>>>>>>> Back-End Review
=======
const permissions = shield(
  {
    Query: {
      listFiles: isAuthenticated,
>>>>>>> Roles
=======
>>>>>>> Back-End Review
      listProjects: isAuthenticated,
      login: not(
        isAuthenticated,
        new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')
      ),
      me: isAuthenticated,
    },
    Mutation: {
      createProject: isAuthenticated,
      createUser: not(isAuthenticated),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      inviteUserToProject: isAuthenticated,
      createFile: isAuthenticated,
=======
      // inviteUserToProject: isAuthenticated,
      //   createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> Back-End Review
=======
      inviteUserToProject: isAuthenticated,
      createFile: isAuthenticated,
>>>>>>> Roles
=======
      // inviteUserToProject: isAuthenticated,
      //   createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> Back-End Review
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, parent, args, context, info) => {
      if (err instanceof ApolloError) {
        // expected errors
        return err;
      } else if (err instanceof Error) {
        // unexpected errors
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.');
        console.error(err);
        return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER');
      }
    },
    allowExternalErrors: true,
  }
);

export default permissions;
