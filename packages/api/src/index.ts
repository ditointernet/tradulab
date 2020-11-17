import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
import * as middlewares from './middlewares';
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> crack the code
<<<<<<< HEAD
>>>>>>> crack the code
=======
=======
import cors from 'cors';
>>>>>>> changes
>>>>>>> changes
// import { graphqlUploadExpress } from 'graphql-upload';
<<<<<<< HEAD
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
=======
const cors = require('cors');
// import cors from 'cors';

>>>>>>> list files done
=======
>>>>>>> formatting changes and some typings
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
=======
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> changes
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
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
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
>>>>>>> file size limit from content length header
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> remove comments
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> changes
=======
app.use(cors());

>>>>>>> list files done
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { graphqlUploadExpress } from 'graphql-upload';
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

>>>>>>> remove comments
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

<<<<<<< HEAD
<<<<<<< HEAD
app.use(middlewares.error);
=======
=======
>>>>>>> changes
app.use(function (err, req, res, next) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> formatting changes and some typings
  console.log('ERROOOO', err);
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
  console.log('ERROOOO', err);
>>>>>>> formatting changes and some typings
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Update Role
  console.error('Error: ', err.name);
=======
  console.log("Error: ", err.name)
>>>>>>> Update Role
<<<<<<< HEAD
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
=======
>>>>>>> Update Role
=======
  console.error("Error: ", err.name)
>>>>>>> remove comments
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Update Role

=======
console.log("Bolivar")
>>>>>>> fix issues
=======
=======
=======
app.use(middlewares.error);
>>>>>>> changes
>>>>>>> changes

>>>>>>> fix
function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
