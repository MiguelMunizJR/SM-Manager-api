const { Sequelize } = require("sequelize");
const config = require("../utils/config");

const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  pool: {
    max: 5,
    min: 0,
    idle: 300000,
    acquire: 300000,
  },
  logging: (log) => {
    console.log("Logging!", log);
  },
});

db.authenticate()
  .then(() => {
    console.log("✔️  Database authenticate succesfully!");
  })
  .catch((err) => {
    console.error(err);
  });

db.sync()
  .then(() => {
    console.log("💠 Database synced succesfully!");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
