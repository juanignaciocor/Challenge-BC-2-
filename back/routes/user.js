const router = require("express").Router();
const { User } = require("../models/index");
const { UserController } = require("../controllers/index");
router.get("/", UserController.fetchUser);
router.post("/", UserController.postUser);

module.exports = router;
