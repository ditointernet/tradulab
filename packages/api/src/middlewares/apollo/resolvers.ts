import { GraphQLUpload } from 'apollo-server-express';
import { GraphQLDateTime } from 'graphql-iso-date';
import {
  auth,
  file,
  project,
  role,
  user,
  // phrase,
  suggestion,
} from '../../modules';

const resolvers = {
  FileUpload: GraphQLUpload,
  Date: GraphQLDateTime,
  Query: {
    ...auth.resolvers.queries,
    ...file.resolvers.queries,
    ...project.resolvers.queries,
    ...role.resolvers.queries,
    ...user.resolvers.queries,
  },
  Mutation: {
    ...auth.resolvers.mutations,
    ...file.resolvers.mutations,
    ...project.resolvers.mutations,
    ...role.resolvers.mutations,
    // ...phrase.resolvers.mutations,
    ...suggestion.resolvers.mutations,
  },
};

export default resolvers;
