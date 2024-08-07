const mongo = require("mongoose");

const addTask = mongo.Schema(
  {
    infoName: {
      type: String,
      require: [true, "Please enter information name"],
    },

    infoLink: {
      type: String,
      require: [true, "Please enter information link"],
    },

    infoDesc: {
      type: String,
      require: [true, "Please enter information description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongo.model("information", addTask);
