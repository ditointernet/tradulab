import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloServer, gql, GraphQLUpload } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, or, rule, shield } from 'graphql-shield';
import cors from 'cors';

import { auth, user, project, role, file } from '../modules';
import { ROLES } from '../modules/role/constants';

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'content-type'],
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
      }
    }

    return false;
  });

const isManagerOrOwner = isOneOfTheseRoles([ROLES.OWNER, ROLES.MANAGER]);
const isDeveloper = isOneOfTheseRoles([ROLES.DEVELOPER]);

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
            login: not(isAuthenticated),
            me: isAuthenticated,
            myProjects: isAuthenticated,
          },
          Mutation: {
            createUser: not(isAuthenticated),
            createProject: isAuthenticated,
            createFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
            updateFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
            removeFile: and(isAuthenticated, or(isDeveloper, isManagerOrOwner)),
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
          fallbackError: (err): Error => {
            console.error('error:', err);
            return new Error('Internal error.');
          },
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
