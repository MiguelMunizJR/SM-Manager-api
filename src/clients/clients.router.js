const router = require("express").Router();
const clientsServices = require("./clients.services");

router
  .route("/")
  .get(clientsServices.getAllClients)
  .post(clientsServices.createClient);

router
  .route("/:id")
  .patch(clientsServices.updateClient)
  .delete(clientsServices.deleteClient);

module.exports = router;
