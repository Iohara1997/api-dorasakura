import { gql } from "apollo-server-express";

const mutation = gql`
  type Mutation {
    registerUser(
      username: String!
      email: String!
      password: String!
      role: String
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    updateUser(id: String, password: String, doramas: [ID]): UpdatePayload!
  }
  type AuthPayload {
    token: String!
    username: String!
    email: String!
    role: String
  }
  type UpdatePayload {
    password: String!
    doramas: [ID!]
  }
`;

export default mutation;
