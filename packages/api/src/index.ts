import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as middlewares from './middlewares';
<<<<<<< HEAD
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
=======
const cors = require('cors');
// import cors from 'cors';

>>>>>>> list files done
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> changes

// const corsOptions = {
//   allowedHeaders: [
//     'Authorization',
//     'content-type',
//     'Access-Control-Allow-Credentials',
//   ],
//   credentials: true,
//   origin: 'http://localhost:3000',
// };
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

const app = express();
<<<<<<< HEAD
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
=======
app.use(cors());

>>>>>>> list files done
=======
import { graphqlUploadExpress } from 'graphql-upload';

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

<<<<<<< HEAD
app.use(function (err, req, res, next) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
=======
  console.log('ERROOOO', err);
>>>>>>> formatting changes and some typings
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
