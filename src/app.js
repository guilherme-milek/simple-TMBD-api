const express = require("express");
const cors = require("cors");
const path = require("path");

const searchRouter = require("./routes/search");
const trendingRouter = require("./routes/trending");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/search", searchRouter);
app.use("/api/trending", trendingRouter);

app.use(express.static(path.join(__dirname, "/client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/", "index.html"));
});

module.exports = app;
