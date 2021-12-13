import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  # enum Extensions {
  #   # csv
  #   json
  # }

  enum ProcessStatuses {
    SUCCESS
    CREATED
    # failed
  }

  type File {
    id: ID!
    project: ID!
    processedStatus: ProcessStatuses!
    # filename: String!
    # sourceLanguage: String!
    # processedAt: Date
    # createdAt: Date!
    # updatedAt: Date!
  }

  type FileWithUploadLink {
    id: ID!
    upload_url: String!
  }

  extend type Mutation {
    createFile(projectId: ID!, filename: String!): FileWithUploadLink!
    uploadFile(
      projectId: ID!
      fileId: ID!
      filename: String!
    ): FileWithUploadLink!
  }

  extend type Query {
    # TODO: make this a connection
    listFiles(projectId: ID!): [File!]!
  }
`;
