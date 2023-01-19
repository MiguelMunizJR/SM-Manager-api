const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./src/db/database");
const PORT = require("./src/utils/config").port;

app.use(express.json());
app.use(cors());

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

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world!"
  });
});

app.listen(PORT, () => {
  console.log(`🌐 Server online at port: ${PORT}`);
});
