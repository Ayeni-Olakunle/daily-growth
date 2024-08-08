const asyncNow = require("express-async-handler");
const Growth = require("../../models/dailyGrowth/dailyGrowth");

const allGrowth = asyncNow(async (req, res) => {
  const growth = await Growth.find();

  res.status(200).json(growth);
});

const addGrowth = asyncNow(async (req, res) => {
  const {
    taskName,
    taskDesc,
    taskLink,
    startDate,
    endDate,
    startTime,
    endTime,
    reminder,
    status,
  } = req.body;

  if (!taskName && !startDate && !endDate && !startTime && !endTime) {
    res.status(400);
    throw new Error("");
  }

  const addGrowth = await Growth.create({
    taskName: taskName,
    taskDesc: taskDesc,
    taskLink: taskLink,
    startDate: startDate,
    endDate: endDate,
    startTime: startTime,
    endTime: endTime,
    reminder: reminder,
    status: status,
  });

  res.status(201).json(addGrowth);
});

const deleteGrowth = asyncNow(async (req, res) => {
  const growth = await Growth.findById(req.params.id);

  if (!growth) {
    res.status(400);
    throw new Error("Not Found");
  }
});

module.exports = {
  allGrowth,
  addGrowth,
};
