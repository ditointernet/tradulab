import { gql } from 'apollo-server-express';
import {
  auth,
  file,
  project,
  role,
  user,
  suggestion,
  phrase,
} from '../../modules';

const typeDefs = gql`
  scalar Date

  ${auth.types}
  ${file.types}
  ${project.types}
  ${role.types}
  ${user.types}
  ${suggestion.types}
  ${phrase.types}
`;

export default typeDefs;
