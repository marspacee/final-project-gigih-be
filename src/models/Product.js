const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  url: { required: true, type: String },
  title: { required: true, type: String },
  price: { required: true, type: Number },
  thumbnail: { required: true, type: String },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "videos",
  },
});

module.exports = mongoose.model("products", ProductSchema);
