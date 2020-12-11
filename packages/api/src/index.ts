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
<<<<<<< HEAD
import * as middlewares from './middlewares';
<<<<<<< HEAD
<<<<<<< HEAD

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======
>>>>>>> Criado o module files e a resolver create File
=======
// declarando uma nova variável
>>>>>>> Update Role
=======
>>>>>>> removing comments
=======
import { graphqlUploadExpress } from 'graphql-upload';
=======
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
>>>>>>> formatting changes and some typings
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> formatting changes and some typings
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> formatting changes and some typings
// import { graphqlUploadExpress } from 'graphql-upload';
=======
import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
>>>>>>> formatting changes and some typings

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Update Role
=======
>>>>>>> remove comments

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { graphqlUploadExpress } from 'graphql-upload';
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
// import { graphqlUploadExpress } from 'graphql-upload';
<<<<<<< HEAD
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
>>>>>>> formatting changes and some typings
=======
import * as middlewares from './middlewares';

>>>>>>> crack the code
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> changes

<<<<<<< HEAD
<<<<<<< HEAD
const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> file size limit from content length header

<<<<<<< HEAD
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Update Role

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request

<<<<<<< HEAD
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======
>>>>>>> remove comments
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
import { graphqlUploadExpress } from 'graphql-upload';
=======
=======
import cors from 'cors';
>>>>>>> changes
=======
const cors = require('cors');
// import cors from 'cors';

>>>>>>> list files done
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings
=======
>>>>>>> removindo unnecessary comments

const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> remove comments

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Update Role

<<<<<<< HEAD
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======

<<<<<<< HEAD
// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));

<<<<<<< HEAD
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
=======
// declarando uma nova variável
>>>>>>> Update Role
>>>>>>> Update Role
=======
>>>>>>> remove comments
=======
=======
import { graphqlUploadExpress } from 'graphql-upload';

const app = express();
<<<<<<< HEAD
=======
>>>>>>> removing comments
=======

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> file size limit from content length header
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
// declarando uma nova variável
>>>>>>> Update Role
=======
>>>>>>> removing comments
=======

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

<<<<<<< HEAD
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
>>>>>>> fix
=======
>>>>>>> changes
=======
app.use(cors());

>>>>>>> list files done
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use(middlewares.error);
=======
app.use(function (err, req, res, next) {
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
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
  console.log('ERROOOO', err);
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> formatting changes and some typings
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
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
  console.log('ERROOOO', err);
=======
  console.log('ERROOOO', err)
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
  console.log('ERROOOO', err);
>>>>>>> formatting changes and some typings
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
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
=======
app.use(function (err, _req, res, _next) {
>>>>>>> resolve index conflicts
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Update Role
=======
>>>>>>> Update Role
  console.error('Error: ', err.name);
=======
  console.log("Error: ", err.name)
>>>>>>> Update Role
<<<<<<< HEAD
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
=======
>>>>>>> Update Role
=======
  console.error("Error: ", err.name)
>>>>>>> remove comments
=======
=======
>>>>>>> remove comments
=======
>>>>>>> removing comments
=======
>>>>>>> conflict
=======
>>>>>>> Code Review
  console.error("Error: ", err.name)
=======
  console.log("Error: ", err.name)
>>>>>>> Update Role
<<<<<<< HEAD
>>>>>>> Update Role
=======
=======
  console.error("Error: ", err.name)
>>>>>>> remove comments
<<<<<<< HEAD
>>>>>>> remove comments
=======
=======
  console.log('Error: ', err.name);
>>>>>>> removing comments
<<<<<<< HEAD
>>>>>>> removing comments
=======
=======
  console.error("Error: ", err.name)
>>>>>>> conflict
<<<<<<< HEAD
>>>>>>> conflict
=======
=======
  console.error('Error: ', err.name);
>>>>>>> Code Review
>>>>>>> Code Review
=======
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
<<<<<<< HEAD
  console.error("Error: ", err.name)
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
  console.error('Error: ', err.name);
>>>>>>> Code Review
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Update Role

=======
console.log("Bolivar")
>>>>>>> fix issues
=======

>>>>>>> fix
=======
app.use(middlewares.error);

<<<<<<< HEAD
>>>>>>> changes
=======
>>>>>>> update listFiles and error
=======
>>>>>>> resolve index conflicts
function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
