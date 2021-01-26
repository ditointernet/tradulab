import { gql } from 'apollo-server-express';

export default gql`
  enum Lang {
    PT_BR
    EN_US
  }

  type Rating {
    allVotes: [ID!]!
    positiveVotes: [ID!]!
    negativeVotes: [ID!]!
    score: Int!
  }

  type Suggestion {
    _id: ID!
    phrase: ID!
    user: ID!
    lang: Lang!
    text: String!
    rating: Rating!
    approved: Boolean
    createdAt: Date!
    updatedAt: Date!
  }
`;
