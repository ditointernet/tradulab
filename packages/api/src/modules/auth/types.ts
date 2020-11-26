import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
  extend type User {
    nickname: String!
    username: String!
  }

  input CreateUserPayload {
=======
  input UserCreationPayload {
    displayName: String
>>>>>>> changes
    email: String!
<<<<<<< HEAD
<<<<<<< HEAD
    nickname: String!
=======
>>>>>>> fix
=======
>>>>>>> changes
    password: String!
    username: String!
  }

  input LoginPayload {
    email: String!
    password: String!
  }

  type UserWithToken {
    email: String!
    nickname: String!
    token: String!
    username: String!
    id: ID!
  }

  extend type Mutation {
    createUser(payload: CreateUserPayload): UserWithToken!
  }

  extend type Query {
    login(payload: LoginPayload): UserWithToken!
  }
`;
