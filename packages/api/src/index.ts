import * as express from 'express';
import * as cors from 'cors';

import { mongo } from './config';
import { env } from './helpers';
import * as middlewares from './middlewares';

const app = express();

app.locals.mongo = mongo;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Authorization', 'content-type'],
  })
);
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
