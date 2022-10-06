import { gql } from "apollo-server-express";

const userTypes = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: String
    doramas: [ID!]
  }
`;
export default userTypes;
