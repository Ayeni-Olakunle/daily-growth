const express = require("express");
const info = express.Router();
const { getAllInfo, addBookmark } = require("../controllers/addInfo/addInfo");

info.route("/").get(getAllInfo);
info.route("/create").post(addBookmark);

module.exports = info;
