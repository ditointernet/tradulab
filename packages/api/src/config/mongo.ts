import * as mongoose from 'mongoose';
import { env } from '../helpers';

let mongo;

const DEFAULT_MONGO_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

try {
  mongo = mongoose.connect(
    env.getOrThrow('MONGO_CONNECTION_URI'),
    DEFAULT_MONGO_OPTIONS
  );
} catch (err) {
  console.info('[!] Mongo connection error');
  console.error(err);
}

export default mongo;
