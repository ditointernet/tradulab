import { gql } from 'apollo-server-express';

export default gql`
  type Project {
    _id: ID!
    slug: String!
    name: String!
    owner: ID!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  input createProjectPayload {
    name: String!
    private: Boolean
  }

  extend type Mutation {
    createProject(payload: createProjectPayload): Project!
  }

  extend type Query {
    listProjects: [RoleWithProject!]!
  }
`;
