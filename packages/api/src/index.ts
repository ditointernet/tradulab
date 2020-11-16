import * as express from 'express';
import { mongo } from './config';
import * as middlewares from './middlewares';
import { env } from './helpers';
<<<<<<< HEAD
// import { graphqlUploadExpress } from 'graphql-upload';
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// declarando uma nova variável
>>>>>>> Update Role
=======
>>>>>>> removing comments
=======
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> Corrigido erro de cors pra qualquer request
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

app.use(function (err, req, res, next) {
<<<<<<< HEAD
  console.log('ERROOOO', err);
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.error('Error: ', err.name);
=======
  console.log("Error: ", err.name)
>>>>>>> Update Role
=======
  console.error("Error: ", err.name)
>>>>>>> remove comments
=======
  console.log('Error: ', err.name);
>>>>>>> removing comments
=======
  console.error("Error: ", err.name)
>>>>>>> conflict
=======
  console.error('Error: ', err.name)
>>>>>>> change aspas
});

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
