const express = require("express");
const info = express.Router();
const { getAllInfo } = require("../controllers/addInfo/addInfo");

info.route("/").get(getAllInfo);

module.exports = info;
