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
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_completed",
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
    field: "user_id",
  },
});

module.exports = Tasks;
