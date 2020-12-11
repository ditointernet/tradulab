<<<<<<< HEAD
import { GraphQLDateTime } from 'graphql-iso-date';
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  gql,
  GraphQLUpload,
} from 'apollo-server-express';
import cors from 'cors';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
=======
import { buildFederatedSchema } from '@apollo/federation';
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  gql,
  GraphQLUpload,
} from 'apollo-server-express';
>>>>>>> feature/resolver-list-file

import { GraphQLDateTime } from 'graphql-iso-date';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
import { auth, user, project, role, file } from '../modules';
import { ROLES } from '../modules/role/constants';

<<<<<<< HEAD
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

=======
>>>>>>> feature/resolver-list-file
const typeDefs = gql`
  scalar Date

  ${auth.types}
  ${file.types}
  ${project.types}
  ${role.types}
  ${user.types}
`;

const isAuthenticated = rule()((_, __, { user }) => {
  if (!user) {
    return new AuthenticationError('You must be logged in.');
  }
  return true;
});

const isOneOfTheseRoles = (allowedRoles: string[]) =>
<<<<<<< HEAD
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
=======
  rule()(async (_, { projectId }, { user: { id: currentUserId } }) => {
>>>>>>> feature/resolver-list-file
    try {
      const projectRole = await role.model.findOne({
        project: projectId,
        user: currentUserId,
      });

<<<<<<< HEAD
      if (projectRole && allowedRoles.includes(projectRole.role)) return true;
=======
      if (
        projectRole &&
        [ROLES.MANAGER, ROLES.OWNER].includes(projectRole.role)
      ) {
        return true;
      }
>>>>>>> feature/resolver-list-file
    } catch (err) {
      console.error(err);
      return err;
    }
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
  });
<<<<<<< HEAD

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

=======

const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);

>>>>>>> feature/resolver-list-file
const permissions = shield(
  {
    Query: {
      login: not(
        isAuthenticated,
        new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')
      ),
      me: isAuthenticated,
      myProjects: isAuthenticated,
<<<<<<< HEAD
=======
      listFiles: isAuthenticated,
>>>>>>> feature/resolver-list-file
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
<<<<<<< HEAD
      inviteUserToProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      removeUserFromProject: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
      updateUserProjectRole: and(
        isAuthenticated,
        isManagerOrOwner
        // isNotTargetingHigherRoles
      ),
=======
      inviteUserToProject: and(isAuthenticated, isManagerOrOwner),
      removeUserFromProject: and(isAuthenticated, isManagerOrOwner),
      updateUserProjectRole: and(isAuthenticated, isManagerOrOwner),
>>>>>>> feature/resolver-list-file
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

const resolvers = buildFederatedSchema([
  {
    typeDefs,
    resolvers: {
      FileUpload: GraphQLUpload,
      Date: GraphQLDateTime,
      Query: {
        ...auth.resolvers.queries,
        ...user.resolvers.queries,
        ...project.resolvers.queries,
        ...role.resolvers.queries,
        ...file.resolvers.queries,
      },
      Mutation: {
        ...auth.resolvers.mutations,
        ...project.resolvers.mutations,
        ...role.resolvers.mutations,
        ...file.resolvers.mutations,
      },
    },
  },
]);

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(resolvers, permissions),
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
<<<<<<< HEAD
        contentLength: parseInt(headers['content-length']),
=======
        contentLength: headers['content-length'],
>>>>>>> feature/resolver-list-file
        user: undefined,
      };

      if (typeof auth === 'object' && auth.id) {
        baseContext.user = await user.model.findById(auth.id);
      }

      return baseContext;
    },
  });

  apolloServer.applyMiddleware({ app });
}
