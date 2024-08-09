const express = require("express");
const signup = express.Router();
const { getAllUser } = require("../controllers/auth/signup");

signup.route("/signup").post(getAllUser);
signup.route("/login").post(getAllUser);
signup.route("/update-user").patch(getAllUser);
signup.route("/user").get(getAllUser);

module.exports = signup;
