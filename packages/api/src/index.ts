import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
import * as middlewares from './middlewares';

// import { graphqlUploadExpress } from 'graphql-upload';
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

const app = express();

app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

app.use(middlewares.error);

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
