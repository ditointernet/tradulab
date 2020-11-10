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
>>>>>>> Criado o module files e a resolver create File
`;
