const express = require("express");
const path = require("path");
const Router = express.Router();
const userController = require("../controllers/userController");

Router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "register.html"));
});

Router.post("/", userController.registerUser);

module.exports = Router;
