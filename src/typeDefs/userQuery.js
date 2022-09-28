import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    user(id: ID!): User
    allUsers: [User!]!
    me: User
  }
`;
export default query;
