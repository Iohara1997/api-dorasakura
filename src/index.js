import express from "express";
import config from "../config.js";
import { ApolloServer } from "apollo-server-express";
import doramaResolver from "./resolvers/doramaResolver.js";
import typeDefs from "./typeDefs/index.js";

const port = config.port;

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();

  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise((resolvers) => app.listen(port, resolvers));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, doramaResolver);
