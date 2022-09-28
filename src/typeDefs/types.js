import { gql } from "apollo-server-express";

const types = gql`
  type Dorama {
    id: ID!
    title: String
    summary: String
    episodes: Int
    genre: String
    year: Int
    trailer: String
    image: String
  }
`;
export default types;
