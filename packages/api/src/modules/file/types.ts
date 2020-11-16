import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Rebase and resolving conflicts with master
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
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    progress: Progress!
>>>>>>> changes
=======
>>>>>>> Rebase and resolving conflicts with master
    project: Project!
    sourceLanguage: String!
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      file: FileUpload!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Rebase and resolving conflicts with master
=======
      sourceLanguage: String!
>>>>>>> Back-End Review
    ): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
<<<<<<< HEAD

// Acho que o progress pode ser colocado no futuro, pois ele vai ser mais complexo que isso, progress de translation para qual lingua?
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Back-End Review
=======
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
