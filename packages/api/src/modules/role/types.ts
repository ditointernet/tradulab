import { gql } from 'apollo-server-express';

export default gql`
  type Role {
    id: ID!
    role: String!
    user: User!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
`;
