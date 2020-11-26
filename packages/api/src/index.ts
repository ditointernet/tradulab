import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as middlewares from './middlewares';
<<<<<<< HEAD

>>>>>>> crack the code
=======
import cors from 'cors';
>>>>>>> changes
// import { graphqlUploadExpress } from 'graphql-upload';
<<<<<<< HEAD
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> changes

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Authorization', 'content-type'],
  credentials: true,
  origin: 'http://localhost:3000',
};

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

<<<<<<< HEAD
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> changes
app.locals.mongo = mongo;

app.use(cors(corsOptions));

app.use(middlewares.jwt);

middlewares.apollo(app);

<<<<<<< HEAD
app.use(function (err, req, res, next) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log('ERROOOO', err);
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  console.log('ERROOOO', err);
>>>>>>> formatting changes and some typings
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
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
=======
app.use(middlewares.error);
>>>>>>> changes

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
