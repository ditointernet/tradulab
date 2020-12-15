import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
=======
>>>>>>> Back-End Review
  extend type User {
    nickname: String!
    username: String!
  }
<<<<<<< HEAD
<<<<<<< HEAD
  input CreateUserPayload {
=======
  input UserCreationPayload {
    displayName: String
<<<<<<< HEAD
>>>>>>> changes
=======

  input CreateUserPayload {
>>>>>>> Back-End Review
=======
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

  input CreateUserPayload {
    email: String!
    nickname: String!
>>>>>>> Back-End Review
    password: String!
    username: String!
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> Back-End Review
=======
>>>>>>> Back-End Review
  input LoginPayload {
    email: String!
    password: String!
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> Back-End Review
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
<<<<<<< HEAD
=======

>>>>>>> Back-End Review
=======

>>>>>>> Back-End Review
  extend type Query {
    login(payload: LoginPayload): UserWithToken!
  }
`;
