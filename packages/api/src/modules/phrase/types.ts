import { gql } from 'apollo-server-express';

export default gql`
  type Phrase {
    id: ID!
    file: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;
