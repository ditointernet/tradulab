import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
  extend type User {
    nickname: String!
    username: String!
  }

  input CreateUserPayload {
<<<<<<< HEAD
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
=======
    email: String!
    nickname: String!
>>>>>>> Back-End Review
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
