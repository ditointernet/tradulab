import { gql } from 'apollo-server-express';

export default gql`
  input UserCreationPayload {
    email: String!
    password: String!
    username: String!
    displayName: String
  }

  type AuthResponse {
    token: String!
  }

  extend type Mutation {
    createUser(user: UserCreationPayload): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
  }
`;
