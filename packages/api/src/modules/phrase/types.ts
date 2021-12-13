import { gql } from 'apollo-server-express';

export default gql`
  type Phrase {
    id: ID!
    key: String!
    content: String!
    file: ID!
  }

  type PhraseEdge {
    node: Phrase!
  }

  type PhraseConnection {
    edges: [PhraseEdge!]!
    pageInfo: PageInfo!
  }

  extend type Query {
    listPhrases(fileId: ID!, page: Int!): PhraseConnection!
    getPhraseById(phraseId: ID!): Phrase!
  }
`;
