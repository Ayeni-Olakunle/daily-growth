const mongo = require("mongoose");

const groth = mongo.Schema({
  taskName: {
    type: String,
    require: [true, "Please enter task name"],
  },
});
