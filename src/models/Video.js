const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  thumbnail: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model("videos", VideoSchema);
