import { gql } from 'apollo-server-express';

export default gql`
  enum Lang {
    pt_br
    en_us
  }

  enum Vote {
    positive
    negative
    clear
  }

  type Rating {
    positiveVotes: [ID!]!
    negativeVotes: [ID!]!
    score: Int!
  }

  type Suggestion {
    id: ID!
    phrase: ID!
    user: ID!
    lang: Lang!
    text: String!
    rating: Rating!
    approved: Boolean
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    rateSuggestion(projectId: ID!, suggestionId: ID!, vote: Vote!): Rating
    deleteSuggestion(projectId: ID!, suggestionID: ID!): Boolean
    createSuggestion(
      text: String!
      phraseId: ID!
      language: String!
      projectId: ID!
    ): Boolean
  }
`;
