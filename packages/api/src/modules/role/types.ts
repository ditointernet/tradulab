import { gql } from 'apollo-server-express';
// Role: GraphQL Object Type
// id: Fields
// special kind of scalar that is restricted a particular set of allowed values
// type modifiers: ! Non-Null
export default gql`
  enum RoleSlug {
    contributor
    developer
    manager
    owner
    proofreader
  }

  enum AvailableRoleSlugs {
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

  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }

  extend type Mutation {
    inviteUserToProject(
      projectId: ID!
      userId: ID!
      role: AvailableRoleSlugs!
    ): RoleWithUserAndProject!
    updateUserProjectRole(
      projectId: ID!
      userId: ID!
      role: AvailableRoleSlugs!
    ): RoleWithUser!
    removeUserFromProject(projectId: ID!, userId: ID!): User!
  }
`;
