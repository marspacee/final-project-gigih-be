const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /products/by-video/:videoId
router.get("/by-video/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;
    const products = await Product.find({ videoId });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// POST /products
router.post("/", async (req, res) => {
  const { url, title, price, thumbnail, videoId } = req.body;
  const product = new Product({
    url,
    title,
    price,
    thumbnail,
    videoId,
  });
  try {
    const newProduct = await product.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
