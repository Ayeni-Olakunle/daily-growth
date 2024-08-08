const express = require("express");
const growth = express.Router();
const {
  allGrowth,
  addGrowth,
  deleteGrowth,
  getSingleGoal,
} = require("../controllers/growth/growth");

growth.route("/all-growth").get(allGrowth);
growth.route("/create").post(addGrowth);
growth.route("/single-growth/:id").get(getSingleGoal);
growth.route("/delete/:id").delete(deleteGrowth);

module.exports = growth;
