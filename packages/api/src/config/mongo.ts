import * as mongoose from 'mongoose';
import { ApolloError } from 'apollo-server-express';
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
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  });

export default mongoose;
