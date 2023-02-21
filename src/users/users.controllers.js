const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");
const uuid = require("uuid");
const Clients = require("../models/clients.model");
const hashPassword = require("../utils/cryptoPass").hashPassword;

const getAllUsers = async () => {
  const data = await Users.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Clients,
      },
      {
        model: Tasks,
      },
    ],
  });
  return data;
};

const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    birthday: data.birthday,
    status: data.status,
    role: data.role
  });

  return newUser;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

const patchUser = async (id, data) => {
  const user = await Users.update(data, {
    where: {
      id,
    },
  });
  return user;
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Clients,
        attributes: {
          exclude: ["updatedAt", "createdAt", "password"]
        }
      },
      {
        model: Tasks,
        attributes: {
          exclude: ["updatedAt", "createdAt"]
        }
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "role", "password"],
    },
  });
  return data;
};

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email,
      status: "active",
    },
  });
  return data;
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  patchUser,
  getUserByEmail,
  getUserById,
};
