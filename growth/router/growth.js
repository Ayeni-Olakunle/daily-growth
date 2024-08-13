const express = require("express");
const growth = express.Router();
const {
  allGrowth,
  addGrowth,
  deleteGrowth,
  getSingleGoal,
  editGrowth,
} = require("../controllers/growth/growth");
const { protect } = require("../middleware/authMiddle");

growth.route("/all-growth").get(protect, allGrowth);
growth.route("/create").post(protect, addGrowth);
growth.route("/edit-growth/:id").patch(protect, editGrowth);
growth.route("/single-growth/:id").get(protect, getSingleGoal);
growth.route("/delete/:id").delete(protect, deleteGrowth);

module.exports = growth;
