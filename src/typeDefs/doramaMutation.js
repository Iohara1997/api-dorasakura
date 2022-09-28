import { gql } from "apollo-server-express";

const doramaMutation = gql`
  type Mutation {
    createDorama(dorama: DoramaInput): Dorama
    updateDorama(id: String, dorama: DoramaInput): Dorama
    deleteDorama(id: String): Dorama
  }
  input DoramaInput {
    title: String
    summary: String
    episodes: Int
    genre: String
    year: Int
    trailer: String
    image: String
  }
`;
export default doramaMutation;
