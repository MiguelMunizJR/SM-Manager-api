
const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json({
        length: response.length,
        timeZone: new Date(),
        data: response
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const createUser = (req, res) => {
  const { firstName, lastName, email, password, birthday, isActive } = req.body;

  if (firstName && lastName && email && password && birthday) {
    usersControllers
      .createProduct({
        firstName,
        lastName,
        email,
        password,
        birthday,
        isActive
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
      },
    });
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  usersControllers
    .deleteUser(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `User with id: ${id}, eliminated succesfully!`,
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

const updateUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password, birthday, isActive } = req.body;

  usersControllers
    .patchProduct(id, {
      firstName,
      lastName,
      email,
      password,
      birthday,
      isActive
    })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `User with ID: ${id}, edited succesfully!`,
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
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
