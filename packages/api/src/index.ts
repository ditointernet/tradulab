import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
import * as middlewares from './middlewares';
const cors = require('cors');
// import cors from 'cors';

// import { graphqlUploadExpress } from 'graphql-upload';
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

// const corsOptions = {
//   allowedHeaders: [
//     'Authorization',
//     'content-type',
//     'Access-Control-Allow-Credentials',
//   ],
//   credentials: true,
//   origin: 'http://localhost:3000',
// };

const app = express();

app.use(cors());

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
