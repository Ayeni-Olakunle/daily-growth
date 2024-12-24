const asyncNow = require("express-async-handler");
const Growth = require("../../models/dailyGrowth/dailyGrowth");
const Task = require("../../models/Task/taskModels");

const allGrowthStatus = asyncNow(async (req, res) => {
  const growth = await Growth.find({ user: req.user.id });

  const initialStatus = {
    "Not Started": 0,
    "In Progress": 0,
    Completed: 0,
    Close: 0,
  };

  // Count the occurrences of each status type
  const statusCount = growth.reduce((acc, item) => {
    if (acc[item.status] !== undefined) {
      acc[item.status] += 1;
    }
    return acc;
  }, initialStatus);

  // Transform the statusCount object into an array format
  const graph = Object.entries(statusCount).map(([type, total]) => ({
    type,
    total,
  }));

  res.status(200).json({
    graph: graph,
    total: growth.length,
  });
});

const allTaskStatus = asyncNow(async (req, res) => {
  const growth = await Task.find({ user: req.user.id });

  const initialStatus = {
    "Not Started": 0,
    "In Progress": 0,
    Completed: 0,
    Close: 0,
  };

  // Count the occurrences of each status type
  const statusCount = growth.reduce((acc, item) => {
    if (acc[item.taskStatus] !== undefined) {
      acc[item.taskStatus] += 1;
    }
    return acc;
  }, initialStatus);

  // Transform the statusCount object into an array format
  const graph = Object.entries(statusCount).map(([type, total]) => ({
    type,
    total,
  }));

  res.status(200).json({
    graph: graph,
    total: growth.length,
  });
});

module.exports = {
  allTaskStatus,
  allGrowthStatus,
};
