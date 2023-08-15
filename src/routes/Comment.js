const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/by-video/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;
    const comments = await Comment.find({ videoId });
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/by-video", async (req, res) => {
  const { videoId, message, username } = req.body;
  const comment = new Comment({ message, username, videoId });
  try {
    const newComments = await comment.save();
    res.status(200).send(newComments);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
