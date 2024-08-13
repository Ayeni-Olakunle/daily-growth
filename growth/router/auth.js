const express = require("express");
const signup = express.Router();
const {
  getUser,
  signupUser,
  userLogin,
  editUser,
} = require("../controllers/auth/signup");

signup.route("/signup").post(signupUser);
signup.route("/login").post(userLogin);
signup.route("/update-user/:id").patch(editUser);
signup.route("/user/:id").get(getUser);

module.exports = signup;
