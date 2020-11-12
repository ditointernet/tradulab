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
<<<<<<< HEAD
      sourceLanguage: String!
      projectId: ID!
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
`;
