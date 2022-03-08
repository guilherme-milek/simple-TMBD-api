const { Router } = require("express");
const router = Router();

const apiError = require("../helpers/errors");

const { linkGenerator, queryFormatter } = require("../helpers/formatters");

const Media = require("../models/Media");
const api = require("../services/api");

router.get(
  "/:filter?",
  async ({ params: { filter = "multi" }, query }, res) => {
    const link = linkGenerator(query);

    let apiResponse = {};
    let response = {};

    try {
      switch (filter) {
        case "multi":
          apiResponse = await api.get(
            `/search/multi?${queryFormatter(query.query)}${link}`
          );

          response = new Media(apiResponse.data);
          break;

        case "movie":
          apiResponse = await api.get(
            `/search/movie?${queryFormatter(query.query)}${link}`
          );

          response = new Media(apiResponse.data, "movie");
          break;

        case "tv":
          apiResponse = await api.get(
            `/search/tv?${queryFormatter(query.query)}${link}`
          );

          response = new Media(apiResponse.data, "tv");
          break;

        case "person":
          apiResponse = await api.get(
            `/search/person?${queryFormatter(query.query)}${link}`
          );
          response = new Media(apiResponse.data, "person");
          break;

        default:
          break;
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(apiError(error));
    }
  }
);

module.exports = router;
