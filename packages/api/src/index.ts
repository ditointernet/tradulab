import * as express from 'express';
import { mongo } from './config';
import { env } from './helpers';
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
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

<<<<<<< HEAD
app.use(middlewares.error);
=======
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
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
});
>>>>>>> Update Role

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
