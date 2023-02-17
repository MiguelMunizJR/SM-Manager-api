const Users = require("../models/users.model");
const uuid = require("uuid");
const { hashPassword } = require("../utils/cryptoPass").hashPassword;

const getAllUsers = async () => {
  const data = await Users.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
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
