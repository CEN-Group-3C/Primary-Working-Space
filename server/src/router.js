const express = require("express");
const controller = require("./controllers/controller.js");
const middleware = require("./middleware/middleware.js");

const router = express.Router();

router.get("/api", middleware.logMessage, controller.index);

module.exports = router;
