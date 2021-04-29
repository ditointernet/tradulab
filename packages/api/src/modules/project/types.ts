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

  type RoleWithProjectNode {
    node: RoleWithProject!
  }

  type RoleWithProjectConnection {
    edges: [RoleWithProjectNode!]!
    pageInfo: PageInfo!
  }

  extend type Mutation {
    createProject(name: String!, private: Boolean): RoleWithProject!
  }

  extend type Query {
    getProjectBySlug: Project
    listMyProjects(limit: Int, startAfter: String): RoleWithProjectConnection!
  }
`;
