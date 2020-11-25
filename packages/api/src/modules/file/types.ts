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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Rebase and resolving conflicts with master
=======
>>>>>>> Rebase and resolving conflicts with master
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
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
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
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
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
  scalar FileUpload

<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
  enum Extentions {
    json
    txt
    csv
  }

  type Progress {
    approval: Int!
    translation: Int!
  }

>>>>>>> changes
  type File {
    id: ID!
    extension: Extentions
    filename: String!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
<<<<<<< HEAD
>>>>>>> Rebase and resolving conflicts with master
=======
>>>>>>> Criado o module files e a resolver create File
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
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Rebase and resolving conflicts with master
=======
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
    progress: Progress!
>>>>>>> changes
    project: Project!
    sourceLanguage: String!
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
    ): File!
  }
>>>>>>> Criado o module files e a resolver create File
=======
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
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
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
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
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
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
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
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Rebase and resolving conflicts with master
=======
=======
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
    ): File!
  }
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
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
=======
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Rebase and resolving conflicts with master
=======
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
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
=======
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
      file: FileUpload!
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
      sourceLanguage: String!
      projectId: ID!
     ): File!
  }
>>>>>>> Criado o module files e a resolver create File
=======

  extend type Query {
    listFile(projectId: ID!): [File]!
  }
>>>>>>> changes
`;

// Acho que o progress pode ser colocado no futuro, pois ele vai ser mais complexo que isso, progress de translation para qual lingua?
