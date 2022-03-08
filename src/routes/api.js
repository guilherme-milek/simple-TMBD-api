const { Router } = require("express");
const router = Router();

const searchRouter = require("./search");
const trendingRouter = require("./trending");

router.use("/search", searchRouter);
router.use("/trending", trendingRouter);

module.exports = router;
