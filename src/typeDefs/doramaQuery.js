import { gql } from "apollo-server-express";

const doramaQuery = gql`
  type Query {
    allDoramas: [Dorama!]!
    dorama(id: ID!): Dorama
  }
`;
export default doramaQuery;
