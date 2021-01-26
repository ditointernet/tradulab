import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { and, not, or, rule, shield } from 'graphql-shield';

import TradulabError from '../../errors';
import { role } from '../../modules';
import { ROLES, ERROR_CODES } from '../../modules/role/constants';

const isAuthenticated = rule()(async (_parent, _args, { user }) => {
  if (!user) return new AuthenticationError('You must be logged in.');

  return true;
});

const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (_parent, { projectId }, { user }) => {
    try {
      const projectRole = await role.model.findOne({
        project: projectId,
        user,
      });
      if (allowedRoles.includes(projectRole?.role)) {
        user.role = projectRole;
        return true;
      }
    } catch (err) {
      console.error(err);
      return new ApolloError(err.message);
    }

    return new TradulabError(ERROR_CODES.NOT_AUTHORIZED);
  });

const isManager = isOneOfTheseRoles([ROLES.MANAGER]);
const isOwner = isOneOfTheseRoles([ROLES.OWNER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const permissions = shield(
  {
    Query: {
      listFiles: isAuthenticated,
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
      inviteUserToProject: and(isAuthenticated, or(isManager, isOwner)),
      removeUserFromProject: and(isAuthenticated, or(isManager, isOwner)),
      updateUserProjectRole: and(isAuthenticated, or(isManager, isOwner)),
      createFile: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
      updateFile: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
      createPhrase: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
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
