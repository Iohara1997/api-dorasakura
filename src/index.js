import express from "express";
import mongoose from "../database";
import config from "../config.js";

const app = express();
const port = config.port;

console.log(mongoose);

app.listen(port, (err) =>
  err ? console.error(err) : console.log("Server listening on PORT 3000")
);
