const axios = require("axios");

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjVmNGE0NGUwMzc2NjEyYzc2NGE0N2M0YzY5MDI2YyIsInN1YiI6IjYyMjY1MDNhNjQ3NjU0MDAxYmRiNzNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-iR0xdgpgJpA_MV_mv85kzwj41a7_3bgXhYrNgH5k8";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

module.exports = api;
