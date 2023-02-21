const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json({
        length: response.length,
        data: response
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const registerUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (firstName && lastName && email && password) {
    usersControllers
      .createUser({
        firstName,
        lastName,
        email,
        password
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
  const { firstName, lastName, email, password, birthday, status, role } =
    req.body;

  usersControllers
    .patchUser(id, {
      firstName,
      lastName,
      email,
      password,
      birthday,
      status,
      role,
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

const getUserById = (req, res) => {
  const id = req.params.id;

  usersControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

//TODO Mi user services:

const getMyUser = (req, res) => {
  //? req.user contiene la informacion del token desencriptado
  const id = req.user.id;

  usersControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const { firstName, lastName, email, password, birthday } = req.body;

  if (firstName && lastName && email && password) {
    usersControllers
      .patchUser(id, {
        firstName,
        lastName,
        email,
        password,
        birthday,
      })
      .then((response) => {
        if (response[0] !== 0) {
          res.status(200).json({
            message: "User edited succesfully!",
          });
        } else {
          res.status(400).json({
            message: "Invalid ID",
          });
        }
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
        birthday: "date"
      },
    });
  }
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers
    .patchUser(id, { status: "inactive" })
    .then(() => {
      res.status(200).json({
        message: "Your user was deleted succesfully!",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllUsers,
  registerUser,
  deleteUser,
  updateUser,
  getUserById,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
