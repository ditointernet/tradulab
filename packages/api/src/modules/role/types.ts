import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
  enum RoleSlug {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  enum InvitedRole {
>>>>>>> Back-End Review
    # viewer
>>>>>>> Update Role
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
=======
  enum InvitedRole {
>>>>>>> Back-End Review
    # viewer
>>>>>>> Update Role
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
=======
  }

  extend type Mutation {
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
