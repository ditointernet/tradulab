import * as express from 'express';
import { mongo } from './config';
import * as middlewares from './middlewares';
import { env } from './helpers';

const app = express();
app.locals.mongo = mongo;

app.use(middlewares.jwt);

middlewares.apollo(app);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'JWT Expired.' });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.error('Error: ', err.name);
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
console.log("Bolivar")
function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
  
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
