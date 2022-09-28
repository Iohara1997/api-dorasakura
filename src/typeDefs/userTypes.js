import { gql } from "apollo-server-express";

const userTypes = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }
`;
export default userTypes;
