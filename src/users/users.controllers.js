const Users = require("../models/users.model");
const uuid = require("uuid");

//* Hash password disabled!
// const { hashPassword } = require("../utils/cryptoPass");

const getAllUsers = async () => {
  const data = await Users.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

const createProduct = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
    isActive: data.isActive,
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

const patchProduct = async (id, data) => {
  const user = await Users.update(data, {
    where: {
      id,
    },
  });
  return user;
};

module.exports = {
  getAllUsers,
  createProduct,
  deleteUser,
  patchProduct,
};
