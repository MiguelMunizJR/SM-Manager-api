const clientsControllers = require("./clients.controllers");

const getAllClients = (req, res) => {
  const userId = req.user.id;

  clientsControllers
    .getAllClients(userId)
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

const getClientById = (req, res) => {
  const id = req.params.id;

  clientsControllers.getClientById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "Invalid ID"
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message
      });
    });

};

const createClient = (req, res) => {
  const userId = req.user.id;
  const { firstName, lastName, email, password, birthday, phone } = req.body;

  if (firstName && lastName && email && password && birthday) {
    clientsControllers
      .createClient(userId, {
        firstName,
        lastName,
        email,
        password,
        birthday,
        phone,
      })
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
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        birthday: "YYYY/MM/DD",
        phone: "0000000000",
      },
    });
  }
};

const deleteClient = (req, res) => {
  const id = req.params.id;

  clientsControllers
    .deleteClient(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `Client with id: ${id}, eliminated succesfully!`,
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

const updateClient = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password, birthday, phone, status } =
    req.body;

  clientsControllers
    .patchClient(id, {
      firstName,
      lastName,
      email,
      password,
      birthday,
      phone,
      status,
    })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `Client with ID: ${id}, edited succesfully!`,
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
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
