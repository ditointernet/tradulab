import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, rule, shield } from 'graphql-shield';

import { auth, user, project, role } from '../modules';
import { ROLES } from '../modules/role/constants';

// A GraphQL service is created by defining types and fields on those types, then providing funcions for each field on each type
// Create e object types;
// Custon scalar types
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
`;

const isAuthenticated = rule()((parent, args, { user }) => !!user);
const isManagerOrOwner = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) {
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });

        if ([ROLES.MANAGER, ROLES.OWNER].includes(projectRole.role))
          return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    return false;
  }
);

export default function ApolloMiddleware(app) {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(
      buildFederatedSchema([
        {
          typeDefs,
          resolvers: {
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
    context: async ({ req: { auth } }: any) => {
      if (typeof auth === 'object' && auth.id) {
        return { user: await user.model.findById(auth.id) };
      }

      return {};
    },
  });

  apolloServer.applyMiddleware({ app });
}
