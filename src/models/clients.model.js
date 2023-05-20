const db = require("../db/database");
const Users = require("./users.model");
const DataTypes = require("sequelize").DataTypes;

const Clients = db.define("clients", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  phone: {
    type: DataTypes.DECIMAL,
    validate: {
      isDecimal: true
    }
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: "id",
    },
    field: "user_id",
  },
});

module.exports = Clients;
