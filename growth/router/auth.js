const express = require("express");
const signup = express.Router();
const { getAllUser } = require("../controllers/auth/signup");

signup.route("/").get(getAllUser)

module.exports = signup;

