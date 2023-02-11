const Tasks = require("../models/tasks.model");
const uuid = require("uuid");

const getAllTasks = async () => {
  const data = await Tasks.findAll();
  return data;
};

const createTask = async (data) => {
  const task = await Tasks.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    isCompleted: data.isCompleted,
  });
  return task;
};

const patchTask = async (id, data) => {
  const task = await Tasks.update(data, {
    where: {
      id,
    },
  });
  return task;
};

const deleteTask = async (id) => {
  const task = await Tasks.destroy({
    where: {
      id,
    },
  });
  return task;
};

module.exports = {
  getAllTasks,
  createTask,
  patchTask,
  deleteTask,
};
