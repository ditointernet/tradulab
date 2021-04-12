import { gql } from 'apollo-server-express';

export default gql`
  type Phrase {
    id: ID!
    key: String!
    text: String!
    file: File!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    listPhrases(projectId: ID!, fileId: ID!): [Phrase!]
  }
`;
