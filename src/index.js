import jwt from "jsonwebtoken";
import express from "express";
import config from "../config.js";
import { ApolloServer } from "apollo-server-express";
import userTypesDefs from "./typeDefs/userTypeDefs.js";
import doramaTypeDefs from "./typeDefs/doramaTypeDefs.js";
import userResolver from "./resolvers/userResolver.js";
import doramaResolver from "./resolvers/doramaResolver.js";

const port = config.port;
const jwtSecret = config.jwtConfig;

async function startApolloServer(typeDefs, resolvers) {
  const getUser = (token) => {
    try {
      if (token) {
        return jwt.verify(token, jwtSecret);
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.get("Authorization") || "";
      return { user: getUser(token.replace("Bearer", "")) };
    },
    playground: true,
  });

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

startApolloServer(
  [userTypesDefs, doramaTypeDefs],
  [userResolver, doramaResolver]
);
