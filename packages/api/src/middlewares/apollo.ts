import { GraphQLDateTime } from 'graphql-iso-date';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
<<<<<<< HEAD
<<<<<<< HEAD
  GraphQLUpload,
  gql,
} from 'apollo-server-express';

=======
  gql,
  GraphQLUpload
} from 'apollo-server-express';
>>>>>>> Create file resolver working at front-end and back-end without error treatment
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
<<<<<<< HEAD
<<<<<<< HEAD
import { not, and, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
import cors from 'cors';
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
import { not, and, or, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { not, and, or, rule, shield } from 'graphql-shield';
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { not, and, or, rule, shield } from 'graphql-shield';
>>>>>>> Corrigido erro de cors pra qualquer request
import cors from "cors";
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import cors from 'cors';
>>>>>>> file size limit from content length header
=======
import cors from 'cors';
>>>>>>> file size limit from content length header
=======
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
import cors from 'cors';
>>>>>>> file size limit from content length header

import { auth, user, project, role, file } from '../modules';
import { ROLES } from '../modules/role/constants';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

<<<<<<< HEAD
=======
// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
>>>>>>> Update Role
=======
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> remove comments
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
};

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

<<<<<<< HEAD
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
<<<<<<< HEAD
      if (
        projectRole &&
        [ROLES.MANAGER, ROLES.OWNER].includes(projectRole.role)
      ) {
        return true;
=======
const isAuthenticated = rule()((parent, args, { user }) => !!user);
const isOneOfTheseRoles = (allowedRoles: string[]) =>
  rule()(async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });

        if (allowedRoles.includes(projectRole?.role)) return true;
      } catch (err) {
        console.error(err);
        return false;
>>>>>>> file size limit from content length header
      }
=======
      if (allowedRoles.includes(projectRole?.role)) return true;

>>>>>>> file size limit from content length header
=======
      if (allowedRoles.includes(projectRole?.role)) return true;

>>>>>>> file size limit from content length header
    } catch (err) {
      console.error(err);
      return err;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
  });

<<<<<<< HEAD
const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);
=======
    return false;
  });

<<<<<<< HEAD
    return false;
  }
);
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);
>>>>>>> file size limit from content length header
=======
const isDeveloper = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });
        if (projectRole.role === ROLES.DEVELOPER)
          return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    return false;
  }
);
>>>>>>> Corrigido erro de cors pra qualquer request
=======
    return new ForbiddenError('You must be owner or manager in this project.');
=======
    return new ForbiddenError(
      'You must be owner or manager in this project or this project doesnt exit.'
    );
>>>>>>> Changing the function ForbiddenError
  });

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);
>>>>>>> file size limit from content length header

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
            createFile: and(
              isAuthenticated,
              or(isDeveloper, isManagerOrOwner)
            ),
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
>>>>>>> file size limit from content length header
=======
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
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
    ),
    context: async ({ req: { auth, headers } }: any) => {
      const baseContext = {
        contentLength: headers['content-length'],
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
