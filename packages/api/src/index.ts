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
import * as middlewares from './middlewares';

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
>>>>>>> formatting changes and some typings
=======
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Unnecessary comments and logs removed, add ApolloErrors
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

<<<<<<< HEAD
<<<<<<< HEAD
const app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
// import { graphqlUploadExpress } from 'graphql-upload';
>>>>>>> formatting changes and some typings

const app = express();
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

// app.use(graphqlUploadExpress({ maxFileSize: 100, maxFiles: 1 }));
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

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
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> formatting changes and some typings
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
