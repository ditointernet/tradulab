import { gql } from 'apollo-server-express';

export default gql`
  enum Lang {
    pt-br
    en-us
  }

  # É uma boa ideia fazer o rating assim?
  type Rating {
    votes: [ID!]!
    score: Number!
  }

  type Suggestion {
    _id: ID!
    phrase: ID!
    user: ID!
    lang: Lang!
    text: String!
    rating: Rating!
    createdAt: Date!
    updatedAt: Date!
  }
`;
