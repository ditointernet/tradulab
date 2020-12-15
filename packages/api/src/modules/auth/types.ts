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
<<<<<<< HEAD
  input CreateUserPayload {
=======
  input UserCreationPayload {
    displayName: String
>>>>>>> changes
=======

  input CreateUserPayload {
>>>>>>> Back-End Review
    email: String!
    nickname: String!
    password: String!
    username: String!
  }
<<<<<<< HEAD
=======

>>>>>>> Back-End Review
  input LoginPayload {
    email: String!
    password: String!
  }
<<<<<<< HEAD
=======

>>>>>>> Back-End Review
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
<<<<<<< HEAD
=======

>>>>>>> Back-End Review
  extend type Query {
    login(payload: LoginPayload): UserWithToken!
  }
`;
