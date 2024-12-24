const mongo = require("mongoose");

const task = mongo.Schema(
  {
    user: {
      type: mongo.Schema.Types.ObjectId,
      require: true,
      ref: "signups",
    },

    taskName: {
      type: String,
      require: [true, "Please enter information name"],
    },

    taskLink: {
      type: String,
      require: [true, "Please enter information link"],
    },

    taskDesc: {
      type: String,
      require: [true, "Please enter information description"],
    },

    taskStatus: {
      type: String,
      require: [true, "Please enter information description"],
      default: "Not Started",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongo.model("task", task);
