const express = require("express");
const signup = express.Router();
const { getAllUser, signupUser } = require("../controllers/auth/signup");

signup.route("/signup").post(signupUser);
signup.route("/login").post(getAllUser);
signup.route("/update-user").patch(getAllUser);
signup.route("/user").get(getAllUser);

module.exports = signup;
