import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  enum Extensions {
    # csv
    json
  }

  enum ProcessStatuses {
    pending
    done
    failed
  }

  type File {
    id: ID!
    extension: Extensions!
    filename: String!
    project: Project!
    sourceLanguage: String!
    processedStatus: ProcessStatuses!
    processedAt: Date
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
      file: FileUpload!
      projectId: ID!
      sourceLanguage: String!
    ): File!
    updateFile(
      newFilename: String!
      fileId: ID!
      projectId: ID!
    ): File!
    deleteFile(
      fileId: ID!
      projectId: ID!
    ): Boolean!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
