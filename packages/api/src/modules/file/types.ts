import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  type File {
    id: ID!
    filename: String!
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
    ): File!
    updateFile(
      newFilename: String!
      fileId: ID!
      projectId: ID!
    ): File!
    removeFile(
      fileId: ID!
      projectId: ID!
    ): String!
  }
`;
