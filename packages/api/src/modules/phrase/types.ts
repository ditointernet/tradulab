import { gql } from 'apollo-server-express';

export default gql`
  type Phrase {
    _id: ID!
    file: File!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }
  extend type Mutation {
    createPhrase(fileId: ID!, text: String!): Phrase!
  }
`;
