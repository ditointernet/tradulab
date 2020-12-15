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

<<<<<<< HEAD
<<<<<<< HEAD
  input createProjectPayload {
    name: String!
    private: Boolean
  }

  extend type Mutation {
    createProject(payload: createProjectPayload): Project!
  }

  extend type Query {
    listProjects: [RoleWithProject!]!
=======
  type ProjectWithUser {
    id: ID!
    slug: String!
    displayName: String!
    owner: User!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
=======
  input createProjectPayload {
    name: String!
    private: Boolean
>>>>>>> Back-End Review
  }

  extend type Mutation {
    createProject(payload: createProjectPayload): Project!
  }

<<<<<<< HEAD
  extend type Mutation {
    createProject(displayName: String!, private: Boolean): ProjectWithUser!
>>>>>>> we tested everything and it seems ok, including a project fix
=======
  extend type Query {
    listProjects: [RoleWithProject!]!
>>>>>>> Back-End Review
  }
`;
