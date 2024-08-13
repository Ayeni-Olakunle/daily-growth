const mongo = require("mongoose");

const signup = mongo.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },

    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email address"],
    },

    verify: {
      type: Boolean,
      default: false,
    },

    phoneNumber: {
      type: Number,
      required: [true, "Please enter your number"],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongo.model("signups", signup);