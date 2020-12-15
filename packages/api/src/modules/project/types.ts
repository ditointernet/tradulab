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
=======

>>>>>>> Back-End Review
  input createProjectPayload {
    name: String!
    private: Boolean
  }
<<<<<<< HEAD
  extend type Mutation {
    createProject(payload: createProjectPayload): Project!
  }
=======

  extend type Mutation {
    createProject(payload: createProjectPayload): Project!
  }

>>>>>>> Back-End Review
  extend type Query {
    listProjects: [RoleWithProject!]!
  }
`;
