const express = require("express");
const mongoose = require("mongoose");
const env = require("./config/env");
const cors = require("cors");

const app = express();

require("dotenv").config();

mongoose.connect(env.mongooUrl);

app.use(express.json());
app.use(cors({ origin: true }));

const videoRouter = require("./routes/Video");
const productRouter = require("./routes/Product");

app.use("/video", videoRouter);
app.use("/product", productRouter);

app.listen(7070, () => console.log("Server Started"));
