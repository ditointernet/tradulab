import { gql } from 'apollo-server-express';

export default gql`
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
<<<<<<< HEAD
    progress: Progress!
=======
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
>>>>>>> Criado o module files e a resolver create File
    project: Project!
    sourceLanguage: String!
    createdAt: Date!
    updatedAt: Date!
  }
  extend type Mutation {
    createFile(
<<<<<<< HEAD
      file: FileUpload!
      projectId: ID!
<<<<<<< HEAD
      sourceLanguage: String!
=======
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
    ): File!
  }
  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
