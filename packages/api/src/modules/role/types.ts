import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
  enum InvitedRole {
    # viewer
=======
=======
>>>>>>> Back-End Review
  enum RoleSlug {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
>>>>>>> Update Role
<<<<<<< HEAD
>>>>>>> Update Role
=======
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
=======
  enum InvitedRole {
>>>>>>> Back-End Review
    # viewer
>>>>>>> Update Role
>>>>>>> Update Role
=======
    # viewer
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Update Role
=======

>>>>>>> Back-End Review
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
<<<<<<< HEAD
  type RoleWithUserAndProject {
    id: ID!
    role: String!
    user: User!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
=======

<<<<<<< HEAD
>>>>>>> Back-End Review
=======
  type RoleWithUserAndProject {
    id: ID!
    role: String!
    user: User!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }

>>>>>>> Roles
  input inviteUserToProjectPayload {
    projectId: ID!
    userId: ID!
    role: InvitedRole!
<<<<<<< HEAD
  }
  input removeUserFromProjectPayload {
    projectId: ID!
    userId: ID!
=======
>>>>>>> Back-End Review
  }
<<<<<<< HEAD
=======

  input removeUserFromProjectPayload {
    projectId: ID!
    userId: ID!
  }

>>>>>>> Roles
  extend type Mutation {
<<<<<<< HEAD
<<<<<<< HEAD
    inviteUserToProject(
      payload: inviteUserToProjectPayload
    ): RoleWithUserAndProject!
    updateUserProjectRole(payload: inviteUserToProjectPayload): Role!
    removeUserFromProject(payload: removeUserFromProjectPayload): Boolean
  }
  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
=======
    inviteUserToProject(payload: inviteUserToProjectPayload): Role!
=======
    inviteUserToProject(
      payload: inviteUserToProjectPayload
    ): RoleWithUserAndProject!
>>>>>>> Roles

<<<<<<< HEAD
    updateUserProjectRole(
      projectId: ID!
      userId: ID!
      role: InvitedRole!
    ): Role!
    removeUserFromProject(projectId: ID!, userId: ID!): User!
>>>>>>> Back-End Review
=======
    updateUserProjectRole(payload: inviteUserToProjectPayload): Role!

    removeUserFromProject(payload: removeUserFromProjectPayload): Boolean
>>>>>>> Roles
  }

  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }
`;
