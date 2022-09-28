import { gql } from "apollo-server-express";

const mutation = gql`
  type Mutation {
    registerUser(
      username: String!
      email: String!
      password: String!
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
  type AuthPayload {
    token: String!
    username: String!
    email: String!
  }
`;

export default mutation;
