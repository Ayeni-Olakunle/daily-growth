const express = require("express");
const task = express.Router();
const {
  allTask,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/task/taskController");
const { protect } = require("../middleware/authMiddle");

task.route("/").get(protect, allTask);
task.route("/addTask").post(protect, addTask);
task.route("/editTask/:id").patch(protect, editTask);
task.route("/deleteTask/:id").delete(protect, deleteTask);

module.exports = task;
