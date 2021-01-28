import * as mongoose from 'mongoose';
import { env } from '../helpers';

const DEFAULT_MONGO_OPTIONS: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  replicaSet: 'rs0',
};

mongoose
  .connect(env.getOrThrow('MONGO_CONNECTION_URI'), DEFAULT_MONGO_OPTIONS)
  .catch((err) => {
    console.info('[!] Mongo connection error');
    return console.error(err.message);
  });

export default mongoose;
