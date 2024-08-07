const mongo = require("mongoose");

const bookMark = mongo.Schema(
  {
    bookMarkName: {
      type: String,
      require: [true, "Please enter information name"],
    },

    bookMarkLink: {
      type: String,
      require: [true, "Please enter information link"],
    },

    bookMarkValue: {
      type: String,
      require: [true, "Please enter information link"],
    },

    bookMarkDesc: {
      type: String,
      require: [true, "Please enter information description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongo.model("bookmark", bookMark);
