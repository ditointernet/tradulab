import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { applyMiddleware } from 'graphql-middleware';
import cors from 'cors';

import permissions from './permissions';
import resolvers from './resolvers';
import typeDefs from './types';
import { IUser } from '../../modules/user/model';
import TradulabError from '../../errors';
import { ERROR_CODES } from '../../constants';

export default function ApolloMiddleware(app) {
  const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

  const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Authorization', 'content-type'],
  };

  interface Context {
    contentLength: number;
    user: IUser;
  }

  const context = ({ req: { auth, headers } }): Context => {
    const baseContext = {
      contentLength: Number(headers['content-length']),
      user: undefined,
    };

    if (auth && auth.id) {
      baseContext.user = auth.id;
    }

    return baseContext;
  };

  const config: ApolloServerExpressConfig = {
    schema: applyMiddleware(schema, permissions),
    context,
    formatError: (err) => {
      console.error(err.originalError);

      if (err.originalError.name.startsWith('MongoError')) {
        throw new TradulabError(ERROR_CODES.INTERNAL_DB_ERROR);
      }

      return err;
    },
  };

  const apolloServer = new ApolloServer(config);

  apolloServer.applyMiddleware({ app, cors: corsOptions });
}
