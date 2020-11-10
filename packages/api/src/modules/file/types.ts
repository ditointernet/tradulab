import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
  scalar FileUpload

  type File {
    id: ID!
    filename: String!
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
=======
  type File {
    id: ID!
    key: String!
    filename: String!
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
>>>>>>> Criado o module files e a resolver create File
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
<<<<<<< HEAD
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
>>>>>>> Criado o module files e a resolver create File
    ): File!
  }
`;
