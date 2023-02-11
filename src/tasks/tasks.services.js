const TasksControllers = require("./tasks.controllers");

const getAllTasks = (req, res) => {
  TasksControllers.getAllTasks()
    .then((response) => {
      res.status(200).json({
        length: response.length,
        timeZone: new Date(),
        data: response,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const createTask = (req, res) => {
  const { title, description, isCompleted } = req.body;

  if (title) {
    TasksControllers.createTask({ title, description, isCompleted })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        title: "string",
        description: "string",
      },
    });
  }
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, isCompleted } = req.body;

  TasksControllers.patchTask(id, {
    title,
    description,
    isCompleted,
  })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `Task with ID: ${id}, edited succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  TasksControllers.deleteTask(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `Task with id: ${id}, eliminated succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
