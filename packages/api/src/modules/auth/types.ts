import { gql } from 'apollo-server-express';

export default gql`
  type UserWithEmailAndToken {
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
    ): UserWithEmailAndToken!
  }

  extend type Query {
    login(email: String!, password: String!): UserWithEmailAndToken!
  }
`;
