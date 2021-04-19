import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { and, not, or, rule, shield } from 'graphql-shield';

import TradulabError from '../../errors';
import { role } from '../../modules';
import { ROLES, ROLES_LIST, ERROR_CODES } from '../../modules/role/constants';

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
const isProofreader = isOneOfTheseRoles([ROLES.PROOFREADER]);
const isContributor = isOneOfTheseRoles([ROLES.CONTRIBUTOR]);
// const isViewer = isOneOfTheseRoles([ROLES.VIEWER]);
const isProofreaderOrHigher = isOneOfTheseRoles(
  ROLES_LIST.slice(0, ROLES_LIST.indexOf(ROLES.PROOFREADER) + 1)
);
const isContributorOrHigher = isOneOfTheseRoles(
  ROLES_LIST.slice(0, ROLES_LIST.indexOf(ROLES.CONTRIBUTOR) + 1)
);

const permissions = shield(
  {
    Query: {
      login: not(
        isAuthenticated,
        new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')
      ),
      me: isAuthenticated,
      myRole: isAuthenticated,
      listFiles: isAuthenticated,
      listMyProjects: isAuthenticated,
      listPhrases: isAuthenticated,
      projectUsers: isAuthenticated,
      findUsersByUsername: isAuthenticated,
      getProjectBySlug: isAuthenticated,
      getUserByUsername: isAuthenticated,
    },
    Mutation: {
      createProject: isAuthenticated,
      createUser: not(isAuthenticated),
      inviteUserToProject: and(isAuthenticated, or(isManager, isOwner)),
      removeUserFromProject: and(isAuthenticated, or(isManager, isOwner)),
      updateUserProjectRole: and(isAuthenticated, or(isManager, isOwner)),
      createFile: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
      updateFile: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
      deleteFile: and(isAuthenticated, or(isManager, isOwner, isDeveloper)),
      createSuggestion: and(
        isAuthenticated,
        or(isManager, isOwner, isDeveloper, isProofreader, isContributor)
      ),
      approveSuggestion: and(isAuthenticated, isProofreaderOrHigher),
      rateSuggestion: and(isAuthenticated, isContributorOrHigher),
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
