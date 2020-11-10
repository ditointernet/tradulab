import { gql } from 'apollo-server-express';

export default gql`
  type File {
    id: ID!
    key: String!
    filename: String!
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
    ): File!
  }
`;
