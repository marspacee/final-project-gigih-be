const express = require("express");
const mongoose = require("mongoose");
const env = require("./config/env");
// const initSocket = require("./utils/socket");
const cors = require("cors");
const http = require("http");
// const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
// const server = http.createServer(app);
// const io = initSocket(server);

mongoose.connect(env.mongooUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors()); // No need to pass { origin: true } here

const videoRouter = require("./routes/Video");
const productRouter = require("./routes/Product");
const commentRouter = require("./routes/Comment");

app.use("/video", videoRouter);
app.use("/product", productRouter);
app.use("/comment", commentRouter);

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to Final Project Gigih API`);
});

app.listen(7070, () =>
  console.log(`Server is Listening on Port: ${env.appPort}`)
);
