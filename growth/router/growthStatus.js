const express = require("express");
const growth = express.Router();
const {
  allGrowthStatus,
  allTaskStatus,
} = require("../controllers/statusGraph/userStatusGraph");

const { protect } = require("../middleware/authMiddle");

growth.route("/all-growth-status").get(protect, allGrowthStatus);
growth.route("/all-task-status").get(protect, allTaskStatus);

module.exports = growth;
