import mongoose from "../../database.js";

export const doramaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  genre: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  year: {
    type: Number,
  },
  trailer: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Dorama = mongoose.model("dorama", doramaSchema, "dorama");

export default Dorama;
