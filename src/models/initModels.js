const Users = require("./users.model");
const Clients = require("./clients.model");
const Tasks = require("./tasks.model");

const initModels = () => {
  Users.hasMany(Clients);
  Clients.belongsTo(Users);

  Users.hasMany(Tasks);
  Tasks.belongsTo(Users);
};

module.exports = initModels;
