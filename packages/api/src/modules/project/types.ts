import { gql } from 'apollo-server-express';

export default gql`
  type Project {
    id: ID!
    slug: String!
    displayName: String!
    owner: User!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createProject(displayName: String!): Project!
  }
`;
