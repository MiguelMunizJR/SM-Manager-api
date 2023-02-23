const Tasks = require("../models/tasks.model");
const uuid = require("uuid");

const getAllTasks = async (userId) => {
  const data = await Tasks.findAll({
    where: {
      userId
    },
    attributes: {
      exclude: ["updatedAt", "userId"]
    }
  });
  return data;
};

const getTaskById = async (id) => {
  const data = await Tasks.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ["updatedAt", "userId"]
    }
  });
  return data;
};

const createTask = async (userId, data) => {
  const task = await Tasks.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    status: data.status,
    userId: userId
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
  getTaskById,
  createTask,
  patchTask,
  deleteTask,
};
