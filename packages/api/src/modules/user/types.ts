import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    username: String!
    displayName: String!
    email: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    me: User!
  }
`;
