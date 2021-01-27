import { gql } from 'apollo-server-express';

export default gql`
  enum Lang {
    pt_br
    en_us
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
