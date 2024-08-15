const asyncNow = require("express-async-handler");
const bookMark = require("../../models/addInfo/addInfo");

const getAllInfo = asyncNow(async (req, res) => {
  const bookMarks = await bookMark.find({ user: req.user.id });
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
    user: req.user.id,
  });

  res.status(201).json(addUp);
});

const editBookMark = asyncNow(async (req, res) => {
  const editBook = await bookMark.findById(req.params.id);

  if (!editBook) {
    res.status(404);
    throw new Error("Not Found");
  }

  const updateBook = await bookMark.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateBook);
});

const getOneBookMark = asyncNow(async (req, res) => {
  try {
    const oneBookMark = await bookMark.findById(req.params.id);
    console.log(oneBookMark);

    if (oneBookMark) {
      res.status(200).json(oneBookMark);
    } else {
      res.status(404);
      throw new Error("Not Found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
});

const deleteBookMark = asyncNow(async (req, res) => {
  const deleteBookMark = await bookMark.findById(req.params.id);

  if (!deleteBookMark) {
    res.status(404);
    throw new Error("Not Found");
  }

  await deleteBookMark.deleteOne();
  res.status(200).json({
    message: `Successfully delete book mark with the ${req.params.id}`,
  });
});

module.exports = {
  getAllInfo,
  addBookmark,
  deleteBookMark,
  getOneBookMark,
  editBookMark,
};
