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

  type MyProject {
    role: String!
    user: String!
    project: Project!
  }

  extend type Query {
    myProjects: [MyProject!]!
  }

  extend type Mutation {
    createProject(displayName: String!, private: Boolean): Project!
  }
`;
