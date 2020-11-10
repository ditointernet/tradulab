import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
  enum InvitedRole {
    # viewer
=======
  enum RoleSlug {
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
    contributor
    developer
    manager
    owner
    proofreader
  }

  enum AvailableRoleSlugs {
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
    contributor
    proofreader
    developer
    manager
  }
  type Role {
    id: ID!
    role: String!
    user: String!
    project: String!
    createdAt: Date!
    updatedAt: Date!
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
  type RoleWithProject {
    id: ID!
    role: String!
    user: String!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
  type RoleWithUser {
    id: ID!
    role: String!
    user: User!
    project: String!
    createdAt: Date!
    updatedAt: Date!
  }
  type RoleWithUserAndProject {
    id: ID!
    role: String!
    user: User!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
  input inviteUserToProjectPayload {
    projectId: ID!
    userId: ID!
    role: InvitedRole!
  }
  input removeUserFromProjectPayload {
    projectId: ID!
    userId: ID!
  }
  extend type Mutation {
    inviteUserToProject(
      payload: inviteUserToProjectPayload
    ): RoleWithUserAndProject!
    updateUserProjectRole(payload: inviteUserToProjectPayload): Role!
    removeUserFromProject(payload: removeUserFromProjectPayload): Boolean
  }
  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }
`;
