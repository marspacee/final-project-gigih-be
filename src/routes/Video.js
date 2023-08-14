const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// GET /video
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// GET /video/:id
router.get("/", async (req, res) => {
  try {
    const video = await Video.findById();
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// POST /video
router.post("/", async (req, res) => {
  const { author, title, thumbnail, url } = req.body;
  const video = new Video({
    author,
    title,
    thumbnail,
    url,
  });
  try {
    const newVideo = await video.save();
    res.status(200).send(newVideo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;