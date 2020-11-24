import { gql } from 'apollo-server-express';

export default gql`
  input UserCreationPayload {
    email: String!
    password: String! 0
    username: String!
    displayName: String
  }

  type AuthResponse {
    token: String!
  }

  extend type Query {
    login(email: String!, password: String!): AuthResponse!
  }

  extend type Mutation {
    createUser(user: UserCreationPayload): AuthResponse!
  }
`;
