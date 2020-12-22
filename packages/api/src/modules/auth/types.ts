import { gql } from 'apollo-server-express';

export default gql`
  extend type User {
    nickname: String!
    username: String!
  }
  input CreateUserPayload {
    email: String!
    nickname: String!
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
