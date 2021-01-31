import { GraphQLUpload } from 'apollo-server-express';
import { GraphQLDateTime } from 'graphql-iso-date';
import {
  auth,
  file,
  project,
  role,
  user,
  phrase,
  suggestion,
} from '../../modules';

const resolvers = {
  FileUpload: GraphQLUpload,
  Date: GraphQLDateTime,
  Query: {
    ...auth.resolvers.queries,
    ...user.resolvers.queries,
    ...suggestion.resolvers.queries,
    ...role.resolvers.queries,
    ...project.resolvers.queries,
    ...file.resolvers.queries,
    ...phrase.resolvers.queries,
  },
  Mutation: {
    ...auth.resolvers.mutations,
    ...user.resolvers.mutations,
    ...role.resolvers.mutations,
    ...suggestion.resolvers.mutations,
    ...project.resolvers.mutations,
    ...file.resolvers.mutations,
    ...phrase.resolvers.mutations,
  },
};

export default resolvers;
