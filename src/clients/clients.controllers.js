const Clients = require("../models/clients.model");
const uuid = require("uuid");

//* Hash password disabled!
// const { hashPassword } = require("../utils/cryptoPass");

const getAllClients = async () => {
  const data = await Clients.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

const createClient = async (data) => {
  const newClient = await Clients.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
    phone: data.phone,
    isActive: data.isActive,
  });

  return newClient;
};

const deleteClient = async (id) => {
  const data = await Clients.destroy({
    where: {
      id,
    },
  });
  return data;
};

const patchClient = async (id, data) => {
  const client = await Clients.update(data, {
    where: {
      id,
    },
  });
  return client;
};

module.exports = {
  getAllClients,
  createClient,
  patchClient,
  deleteClient,
};
