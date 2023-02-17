const router = require("express").Router();
const clientsServices = require("./clients.services");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    clientsServices.getAllClients
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    clientsServices.createClient
  );
  
router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    clientsServices.getClientById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    clientsServices.updateClient
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    clientsServices.deleteClient
  );

module.exports = router;
