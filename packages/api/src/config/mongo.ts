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
    return console.error(err.message);
  });

export default mongoose;
=======
    return console.error(err);
  });

export default mongoose;
>>>>>>> changes
