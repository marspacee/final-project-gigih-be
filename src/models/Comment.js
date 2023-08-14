const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    username: { required: true, type: String },
    message: { required: true, type: String },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "videos",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comments", CommentSchema);
