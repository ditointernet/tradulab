import { GraphQLDateTime } from 'graphql-iso-date';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
<<<<<<< HEAD
<<<<<<< HEAD
  gql,
  GraphQLUpload
} from 'apollo-server-express';
import cors from 'cors';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
=======
  GraphQLUpload,
  gql,
} from 'apollo-server-express';

import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, rule, shield } from 'graphql-shield';
import cors from 'cors';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
=======
import { ApolloError, ApolloServer, AuthenticationError, ForbiddenError, gql, GraphQLUpload } from 'apollo-server-express';
>>>>>>> fix issues
=======
  gql,
  GraphQLUpload
} from 'apollo-server-express';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, rule, shield } from 'graphql-shield';
import cors from "cors";
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment

import { auth, user, project, role, file } from '../modules';
import { ROLES } from '../modules/role/constants';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: 'Authorization',
};

<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: 'Authorization',  
};

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> remove comments
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
const typeDefs = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  ${auth.types}
  ${user.types}
  ${project.types}
  ${role.types}
  ${file.types}
`;

const isAuthenticated = rule()((parent, args, { user }) => {
  if (!user) {
    return new AuthenticationError('You must be logged in.');
  }
  return true;
});

const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
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
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    } catch (err) {
      console.error(err);
      return err;
    }
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
  });

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

const permissions = shield(
  {
    Query: {
      login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
      me: isAuthenticated,
      myProjects: isAuthenticated,
    },
    Mutation: {
      createUser: not(isAuthenticated),
      createProject: isAuthenticated,
      createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
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

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(
<<<<<<< HEAD
      resolvers,
      permissions,      
=======
      buildFederatedSchema([
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
      ]),
      shield(
        {
          Query: {
            login: not(
              isAuthenticated,
              new ApolloError(
                'Someone is already logged in.',
                'ALREADY_LOGGED_IN'
              )
            ),
            me: isAuthenticated,
            myProjects: isAuthenticated,
          },
          Mutation: {
            createUser: not(isAuthenticated),
            createProject: isAuthenticated,
            createFile: isAuthenticated,
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
              return new ApolloError(
                'Internal server error',
                'ERR_INTERNAL_SERVER'
              );
            } else {
              // what the hell got thrown
              console.error(
                'The resolver threw something that is not an error.'
              );
              console.error(err);
              return new ApolloError(
                'Internal server error',
                'ERR_INTERNAL_SERVER'
              );
            }
          },
          allowExternalErrors: true,
        }
      )
>>>>>>> Criado o module files e a resolver create File
    ),
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: parseInt(headers['content-length']),
        user: undefined,
      };

      if (typeof auth === 'object' && auth.id) {
        baseContext.user = await user.model.findById(auth.id);
      }

      return baseContext;
    },
  });

  apolloServer.applyMiddleware({ app, cors: corsOptions });
}
