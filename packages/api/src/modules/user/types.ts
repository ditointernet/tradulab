import { gql } from 'apollo-server-express';

export default gql`
  type CurrentUser {
    id: ID!
    username: String!
    displayName: String!
    email: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type User {
    id: ID!
    username: String!
    displayName: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type UserNode {
    node: User!
  }

  type PageInfo {
    startAfter: String
    hasNextPage: Boolean
  }

  type UserConnection {
    edges: [UserNode!]!
    pageInfo: PageInfo!
  }

  extend type Query {
    me: CurrentUser!
    getUserByUsername(username: String!): User
    findUsersByUsername(
      searchTerm: String!
      limit: Int
      startAfter: String
    ): UserConnection!
  }
`;
