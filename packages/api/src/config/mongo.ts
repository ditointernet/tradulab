import * as mongoose from 'mongoose';
import { env } from '../helpers';

const DEFAULT_MONGO_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(env.getOrThrow('MONGO_CONNECTION_URI'), DEFAULT_MONGO_OPTIONS)
  .catch((err) => {
    console.info('[!] Mongo connection error');
<<<<<<< HEAD
<<<<<<< HEAD
    return console.error(err.message);
=======
    return console.error(err);
>>>>>>> changes
=======
    return console.error(err.message);
>>>>>>> Back-End Review
  });

export default mongoose;
