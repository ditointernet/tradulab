import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  enum Extensions {
    csv
    json
    txt
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

    updateFile(newFilename: String!, fileId: ID!, projectId: ID!): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
