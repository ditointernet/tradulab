import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  enum Extentions {
    csv
    json
    txt
  }

  type File {
    id: ID!
    extension: Extentions
    filename: String!
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

    updateFile(newFilename: String!, fileId: ID!, projectId: ID!): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
