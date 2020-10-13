import { gql } from 'apollo-server-express';

export default gql`
  type Project {
    id: ID!
    slug: String!
    displayName: String!
    owner: String!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    myProjects: [RoleWithProject!]!
  }

  extend type Mutation {
    createProject(displayName: String!, private: Boolean): Project!
  }
`;
