import { gql } from 'apollo-server-express';

export default gql`
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
`;
