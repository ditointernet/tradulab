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

  extend type Mutation {
    inviteUserToProject(
      projectId: ID!
      userId: ID!
      role: InvitedRole!
    ): RoleWithUserAndProject!

    updateUserProjectRole(
      projectId: ID!
      userId: ID!
      role: InvitedRole!
    ): Role!

    removeUserFromProject(projectId: ID!, userId: ID!): Boolean
  }

  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
    myRole(projectId: ID!): Role
  }
`;
