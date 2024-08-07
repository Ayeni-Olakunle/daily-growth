const asyncNow = require("express-async-handler");
const AddInfo = require("../../models/addInfo/addInfo");

const getAllInfo = asyncNow(async (req, res) => {
  const addInfo = await AddInfo.find();
  res.status(200).json(addInfo);
});

module.exports = {
  getAllInfo,
};
