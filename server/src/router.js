const express = require("express");
const controller = require("./controllers/controller.js");
const middleware = require("./middleware/middleware.js");

const router = express.Router();

router.get("/api", middleware.logMessage, controller.index);

router.get("/api/users", controller.getUsers);
router.get("/api/users/:id", controller.getUser);
router.post("/api/users", controller.createUser);
router.put("/api/users/:id", controller.updateUser);
router.delete("/api/users/:id", controller.deleteUser);

module.exports = router;
