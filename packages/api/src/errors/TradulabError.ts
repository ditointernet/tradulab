import { ApolloError } from 'apollo-server-express';
import ERROR_MESSAGES from './errorMessages';

export class TradulabError extends ApolloError {
  constructor(code: string) {
    super(ERROR_MESSAGES[code], code);
  }
}
