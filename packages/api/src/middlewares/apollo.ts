import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloError, ApolloServer, AuthenticationError, ForbiddenError, gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, and, rule, shield } from 'graphql-shield';

import { auth, user, project, role } from '../modules';
import { ROLES } from '../modules/role/constants';

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

const isAuthenticated = rule()((parent, args, { user }) => {
  if (!user) {
    return new AuthenticationError('You must be logged in.'); // Tem que ver
  }
  return true;
});

const isManagerOrOwner = rule()(
  async (parent, { projectId }, { user: { id: currentUserId } }) => {
    if (user) { // O que é esse user?
      try {
        const projectRole = await role.model.findOne({
          project: projectId,
          user: currentUserId,
        });

        if ([ROLES.MANAGER, ROLES.OWNER].includes(projectRole.role)) {
          return true;
        }
      } catch (err) {
        console.error(err);
        return err;
      }
    }

    return new ForbiddenError('You must be owner or manager in this project.');
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
              //return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER')
              return new ApolloError('Someone is already logged in.'); // Parece gambiarra, não tem como diferenciar erro null
            }
          },
          allowExternalErrors: true, // depois conferir se isso faz diferença
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
