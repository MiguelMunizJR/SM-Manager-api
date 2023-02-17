const db = require("../db/database");
const DataTypes = require("sequelize").DataTypes;
const Users = require("./users.model");

const Tasks = db.define("tasks", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: "no description",
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "not completed",
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

module.exports = Tasks;
