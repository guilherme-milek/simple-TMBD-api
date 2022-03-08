const { Router } = require("express");
const router = Router();

const Search = require("../models/Media");
const api = require("../services/api");
const apiError = require("../helpers/errors");

router.get(
  "/:media_type?/:time_window?",
  async ({ params: { media_type = "all", time_window = "week" } }, res) => {
    try {
      const response = await api.get(`/trending/${media_type}/${time_window}`);

      const search = new Search(response.data, media_type);

      res.status(200).send(search);
    } catch (error) {
      res.status(400).send(apiError(error));
    }
  }
);

module.exports = router;
