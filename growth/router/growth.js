const express = require("express");
const growth = express.Router();
const { allGrowth, addGrowth } = require("../controllers/growth/growth");

growth.route("/all-growth").get(allGrowth);
growth.route("/create").post(addGrowth);

module.exports = growth;
