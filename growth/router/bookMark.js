const express = require("express");
const info = express.Router();
const {
  getAllInfo,
  addBookmark,
  deleteBookMark,
  getOneBookMark,
  editBookMark,
} = require("../controllers/addInfo/addInfo");
const { protect } = require("../middleware/authMiddle");

info.route("/").get(protect, getAllInfo);
info.route("/create").post(protect, addBookmark);
info.route("/edit-bookmark/:id").patch(protect, editBookMark);
info.route("/delete/:id").delete(protect, deleteBookMark);
info.route("/single-bookmark/:id").get(protect, getOneBookMark);

module.exports = info;
