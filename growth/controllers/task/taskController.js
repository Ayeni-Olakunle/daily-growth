const asyncNow = require("express-async-handler");
const TaskModels = require("../../models/Task/taskModels");

const allTask = asyncNow(async (req, res) => {
  const task = await TaskModels.find({ user: req.user.id });

  res.status(200).json(task);
});

const addTask = asyncNow(async (req, res) => {
  const { taskName, taskLink, taskDesc } = req.body;

  if (!taskName && !taskLink && !taskDesc) {
    res.status(400);
    throw new Error("Please fill all required field");
  }

  const addContent = await TaskModels.create({
    user: req.user.id,
    taskName: taskName,
    taskLink: taskLink,
    taskDesc: taskDesc,
  });

  res.status(201).json(addContent);
});

const editTask = asyncNow(async (req, res) => {
  const task = await TaskModels.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Not Found");
  }

  const updateTask = await TaskModels.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateTask);
});

const deleteTask = asyncNow(async (req, res) => {
  const check = TaskModels.findById(req.params.id);

  if (!check) {
    res.status(400);
    throw new Error("Not Found");
  }

  await check.deleteOne();

  res.status(200).json({
    message: `Successfully deleted goal with the id ${req.params.id}`,
  });
});

module.exports = {
  allTask,
  addTask,
  editTask,
  deleteTask,
};
