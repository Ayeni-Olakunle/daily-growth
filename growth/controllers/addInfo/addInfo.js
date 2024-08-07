const asyncNow = require("express-async-handler");
const bookMark = require("../../models/addInfo/addInfo");

const getAllInfo = asyncNow(async (req, res) => {
  const bookMarks = await bookMark.find();
  res.status(200).json(bookMarks);
});

const addBookmark = asyncNow(async (req, res) => {
  const { bookMarkName, bookMarkLink, bookMarkValue, bookMarkDesc } = req.body;

  if (!bookMarkName && !bookMarkValue && !bookMarkLink && !bookMarkDesc) {
    res.status(400);
    throw new Error("Please fill all required field");
  }

  const addUp = await bookMark.create({
    bookMarkName: bookMarkName,
    bookMarkLink: bookMarkLink,
    bookMarkValue: bookMarkValue,
    bookMarkDesc: bookMarkDesc,
  });

  res.status(201).json(addUp);
});

module.exports = {
  getAllInfo,
  addBookmark,
};
