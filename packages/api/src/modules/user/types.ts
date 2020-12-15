import { gql } from 'apollo-server-express';

export default gql`
  type User {
    _id: ID!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    me: User!
  }
`;
