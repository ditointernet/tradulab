import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import { not, rule, shield } from 'graphql-shield';

import { auth, user, project } from '../modules';

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
`;

const isAuthenticated = rule()((parent, args, { user }) => !!user);

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
            },
            Mutation: {
              ...auth.resolvers.mutations,
              ...project.resolvers.mutations,
            },
          },
        },
      ]),
      shield(
        {
          Query: {
            me: isAuthenticated,
            login: not(isAuthenticated),
          },
          Mutation: {
            createUser: not(isAuthenticated),
            createProject: isAuthenticated,
          },
        },
        {
          fallbackError: (err): Error => {
            console.error(err);
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
