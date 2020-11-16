import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as middlewares from './middlewares';
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
// import { graphqlUploadExpress } from 'graphql-upload';
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> file size limit from content length header
=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======
>>>>>>> Criado o module files e a resolver create File
=======
=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
// declarando uma nova variável
>>>>>>> Update Role
=======
>>>>>>> removing comments
<<<<<<< HEAD
>>>>>>> removing comments
=======
=======
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> file size limit from content length header
>>>>>>> file size limit from content length header
=======
>>>>>>> Corrigido erro de cors pra qualquer request
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

<<<<<<< HEAD
app.use(middlewares.error);
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Update Role

=======
console.log("Bolivar")
>>>>>>> fix issues
=======

>>>>>>> fix
function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
