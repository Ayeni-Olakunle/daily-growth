const express = require("express");
const signup = express.Router();
const {
  getUser,
  signupUser,
  userLogin,
  editUser,
} = require("../controllers/auth/signup");
const { protect } = require("../middleware/authMiddle");
const passport = require("passport");

signup.route("/signup").post(signupUser);
signup.route("/login").post(userLogin);
signup.route("/update-user/:id").patch(protect, editUser);
// signup.route("/user").get(protect, getUser);
signup.get("/user", protect, getUser);

signup.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

module.exports = signup;
