const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

module.exports = api;
