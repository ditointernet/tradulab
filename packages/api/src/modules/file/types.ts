import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
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
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
<<<<<<< HEAD
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
=======
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }
`;
