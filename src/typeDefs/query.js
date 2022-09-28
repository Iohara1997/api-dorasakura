import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    doramas: [Dorama]
    dorama(id: ID!): Dorama
  }
`;
export default query;
