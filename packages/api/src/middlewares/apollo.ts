import { GraphQLDateTime } from 'graphql-iso-date';
<<<<<<< HEAD
import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  gql,
  GraphQLUpload
} from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
import cors from 'cors';
=======
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
import cors from "cors";
>>>>>>> Create file resolver working at front-end and back-end without error treatment

import { auth, user, project, role, file } from '../modules';
import { ROLES } from '../modules/role/constants';

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
<<<<<<< HEAD
<<<<<<< HEAD
  allowedHeaders: ['Authorization', 'content-type'],
=======
  allowedHeaders: 'Authorization',  
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  allowedHeaders: ['Authorization', 'content-type'],
>>>>>>> Corrigido erro de cors pra qualquer request
};

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

      if (allowedRoles.includes(projectRole?.role)) return true;

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
=======
    return false;
  }
);
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

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    uploads: {
      maxFileSize: 200,
    },
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
            login: not(isAuthenticated, new ApolloError('Someone is already logged in.', 'ALREADY_LOGGED_IN')),
            me: isAuthenticated,
            myProjects: isAuthenticated,
          },
          Mutation: {
            createUser: not(isAuthenticated),
            createProject: isAuthenticated,
<<<<<<< HEAD
<<<<<<< HEAD
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
=======
            createFile: isAuthenticated,
>>>>>>> Criado o module files e a resolver create File
=======
            createFile: and(
              isAuthenticated,
              or(isDeveloper, isManagerOrOwner)
            ),
>>>>>>> Corrigido erro de cors pra qualquer request
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
