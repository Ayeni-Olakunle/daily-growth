const express = require("express");
const info = express.Router();
const {
  getAllInfo,
  addBookmark,
  deleteBookMark,
  getOneBookMark,
  editBookMark,
} = require("../controllers/addInfo/addInfo");

info.route("/").get(getAllInfo);
info.route("/create").post(addBookmark);
info.route("/edit-bookmark/:id").patch(editBookMark);
info.route("/delete/:id").delete(deleteBookMark);
info.route("/single-bookmark/:id").get(getOneBookMark);

module.exports = info;
