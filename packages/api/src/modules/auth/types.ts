import { gql } from 'apollo-server-express';

export default gql`
  type UserWithToken {
    id: ID!
    username: String!
    displayName: String!
    email: String!
    token: String!
  }

  extend type Mutation {
    createUser(
      email: String!
      password: String!
      username: String!
      displayName: String!
    ): UserWithToken!
  }

  extend type Query {
    login(email: String!, password: String!): UserWithToken!
  }
`;
