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
  console.error("Error: ", err.name)
=======
  console.log('Error: ', err.name);
>>>>>>> e5c9f4e580b19f4ea3b95e7bc5f1805c802a435d
});

function start() {
  const EXPRESS_PORT = env.getOrThrow('EXPRESS_PORT');

  app.listen({ port: EXPRESS_PORT }, () =>
    console.info('🚀: api started on port ' + EXPRESS_PORT)
  );
}

start();
