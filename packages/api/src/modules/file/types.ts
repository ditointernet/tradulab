import { gql } from 'apollo-server-express';

export default gql`
  scalar FileUpload

  enum Extentions {
    json
    txt
    csv
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
      sourceLanguage: String!
      projectId: ID!
    ): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;

// Acho que o progress pode ser colocado no futuro, pois ele vai ser mais complexo que isso, progress de translation para qual lingua?
