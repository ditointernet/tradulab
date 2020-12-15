import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
  enum InvitedRole {
=======
  enum RoleSlug {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
    # viewer
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
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
=======
>>>>>>> Update Role
    contributor
    developer
    manager
<<<<<<< HEAD
=======
    owner
    proofreader
>>>>>>> Update Role
  }
<<<<<<< HEAD
=======

  enum AvailableRoleSlugs {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  enum InvitedRole {
>>>>>>> Back-End Review
    # viewer
=======
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
=======
>>>>>>> Update Role
    contributor
    proofreader
    developer
    manager
  }

>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
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
# Por que esses diferentes tipos de Role... ?
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Update Role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
=======

>>>>>>> Code Review
=======

>>>>>>> Back-End Review
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

>>>>>>> Back-End Review
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
  extend type Mutation {
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

    updateUserProjectRole(
      projectId: ID!
      userId: ID!
      role: InvitedRole!
    ): Role!
    removeUserFromProject(projectId: ID!, userId: ID!): User!
>>>>>>> Back-End Review
  }

  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }
`;
