const mongoose = require("mongoose");

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
});
