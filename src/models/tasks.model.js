const db = require("../db/database");
const DataTypes = require("sequelize").DataTypes;

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
    field: "is_completed"
  },
});

module.exports = Tasks;
