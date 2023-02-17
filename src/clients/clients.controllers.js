const Clients = require("../models/clients.model");
const uuid = require("uuid");

//* Hash password disabled!
const { hashPassword } = require("../utils/cryptoPass");

const getAllClients = async (userId) => {
  const data = await Clients.findAll({
    where: {
      userId
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "password"],
    },
  });
  return data;
};

const getClientById = async (id) => {
  const data = await Clients.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "password"],
    },
  });
  return data;
};

const createClient = async (userId, data) => {
  const newClient = await Clients.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    birthday: data.birthday,
    phone: data.phone,
    status: data.status,
    userId: userId
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
  getClientById,
  createClient,
  patchClient,
  deleteClient,
};
