import { gql } from 'apollo-server-express';

export default gql`
  enum InvitedRole {
    # viewer
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
