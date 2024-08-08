const express = require("express");
const growth = express.Router();
const {
  allGrowth,
  addGrowth,
  deleteGrowth,
  getSingleGoal,
  editGrowth,
} = require("../controllers/growth/growth");

growth.route("/all-growth").get(allGrowth);
growth.route("/create").post(addGrowth);
growth.route("/edit-growth/:id").patch(editGrowth);
growth.route("/single-growth/:id").get(getSingleGoal);
growth.route("/delete/:id").delete(deleteGrowth);

module.exports = growth;
