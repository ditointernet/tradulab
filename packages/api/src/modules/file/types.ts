import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  scalar FileUpload
  enum Extentions {
    csv
    json
    txt
  }
  type Progress {
    approval: Int!
    translation: Int!
  }
  type File {
    id: ID!
    extension: Extentions
    filename: String!
    progress: Progress!
    project: Project!
    sourceLanguage: String!
    createdAt: Date!
    updatedAt: Date!
  }
  extend type Mutation {
    createFile(
      file: FileUpload!
      projectId: ID!
      sourceLanguage: String!
    ): File!
  }
  extend type Query {
    listFiles(projectId: ID!): [File]
  }
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
    ): File!
  }
>>>>>>> Criado o module files e a resolver create File
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
>>>>>>> Criado o module files e a resolver create File
`;
