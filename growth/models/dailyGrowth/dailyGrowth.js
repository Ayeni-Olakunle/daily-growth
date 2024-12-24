const mongo = require("mongoose");

const growth = mongo.Schema(
  {
    user: {
      type: mongo.Schema.Types.ObjectId,
      require: true,
      ref: "signups",
    },

    goalName: {
      type: String,
      require: [true, "Please enter task name"],
    },

    goalDesc: {
      type: String,
    },

    goalLink: {
      type: String,
    },

    startDate: {
      type: String,
      require: [true, "Please enter start date"],
    },

    endDate: {
      type: String,
      require: [true, "Please enter end date"],
    },

    startTime: {
      type: String,
      require: [true, "Please enter start time"],
    },

    endTime: {
      type: String,
      require: [true, "Please enter end time"],
    },

    status: {
      type: String,
      default: "Not Started",
      require: [true, "Please goal status"],
    },

    reminder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongo.model("groth", growth);
