const { Sequelize } = require("sequelize");
const config = require("../utils/config");
const { Pool } = require("pg");

const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database
});

const pool = new Pool({
  user: config.db.username,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.port,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
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
