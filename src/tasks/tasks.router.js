const TasksServices = require("./tasks.services");
const router = require("express").Router();
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    TasksServices.getAllTasks
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    TasksServices.createTask
  );

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    TasksServices.getTaskById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    TasksServices.updateTask
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    TasksServices.deleteTask
  );

module.exports = router;
