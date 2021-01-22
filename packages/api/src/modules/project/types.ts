import { gql } from 'apollo-server-express';

export default gql`
  type Project {
    id: ID!
    slug: String!
    name: String!
    owner: ID!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createProject(name: String!, private: Boolean): Project!
  }

  extend type Query {
    listProjects: [RoleWithProject!]!
  }
`;
