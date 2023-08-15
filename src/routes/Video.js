const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// GET /video
router.get("/filtered-by-title", async (req, res) => {
  try {
    const { filterTitle } = req.query;
    const regex = new RegExp(filterTitle, "i"); // 'i' flag for case-insensitive search

    const videos = await Video.find({ title: { $regex: regex } });
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// GET /video/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
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
