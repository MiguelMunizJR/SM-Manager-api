const router = require("express").Router();
const usersServices = require("./users.services");

router.route("/")
  .get(usersServices.getAllUsers)
  .post(usersServices.createUser);

router.route("/:id")
  .patch(usersServices.updateUser)
  .delete(usersServices.deleteUser);

module.exports = router;