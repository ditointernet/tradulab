import * as express from 'express';
import { mongo } from './config';
import * as middlewares from './middlewares';
import { env } from './helpers';
<<<<<<< HEAD
<<<<<<< HEAD
// import { graphqlUploadExpress } from 'graphql-upload';

const app = express();
<<<<<<< HEAD

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

=======
import { graphqlUploadExpress } from 'graphql-upload';
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

const app = express();
<<<<<<< HEAD
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

app.use(function (err, req, res, next) {
  console.log('ERROOOO', err);
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
  console.error("Error: ", err.name)
});

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
