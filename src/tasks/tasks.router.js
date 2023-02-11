const TasksServices = require("./tasks.services");
const router = require("express").Router();

router.route("/").get(TasksServices.getAllTasks).post(TasksServices.createTask);

router
  .route("/:id")
  .patch(TasksServices.updateTask)
  .delete(TasksServices.deleteTask);

module.exports = router;
