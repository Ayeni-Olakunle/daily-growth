const express = require("express");
const signup = express.Router();
const {
  getUser,
  signupUser,
  userLogin,
  editUser,
} = require("../controllers/auth/signup");
const { protect } = require("../middleware/authMiddle");

signup.route("/signup").post(signupUser);
signup.route("/login").post(userLogin);
signup.route("/update-user/:id").patch(editUser);
signup.route("/user/:id", protect).get(getUser);

module.exports = signup;
