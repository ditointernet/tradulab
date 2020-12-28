import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { not, rule, shield } from 'graphql-shield';

const isAuthenticated = rule()(async (_parent, _args, { user }) => {
  if (!user) return new AuthenticationError('You must be logged in.');

  return true;
});

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
      inviteUserToProject: isAuthenticated,
      createFile: isAuthenticated,
    },
  },
  {
    // https://github.com/maticzav/graphql-shield
    fallbackError: (err, _parent, _args, _context, _info) => {
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
