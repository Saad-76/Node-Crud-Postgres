const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();
router.post("/newUser", userController.registerUser);
router.post("/signIn", userController.signIn);

module.exports = router;
