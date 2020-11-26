import { gql } from 'apollo-server-express';

export default gql`
  input UserCreationPayload {
    displayName: String
    email: String!
    password: String!
    username: String!
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
