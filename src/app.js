const express = require("express");
const cors = require("cors");
const path = require("path");

const mainRouter = require("./routes/api");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", mainRouter);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

module.exports = app;
