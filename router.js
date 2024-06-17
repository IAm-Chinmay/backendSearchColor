const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/search/:query", controller.searchQuery);
router.get("/search/", controller.getAll);

module.exports = router;
