const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./src/db/database");
const PORT = require("./src/config").port;

app.use(express.json());
app.use(cors());

// db.authenticate().then(() => {
//   console.log(`✔️ Database authenticate succesfully!`);
// });

// db.sync().then(() => {
//   console.log(`💠 Database synced succesfully!`);
// });

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "Hello world!",
    })
    .end();
});

app.listen(PORT, () => {
  console.log(`Server online at port: ${PORT}`);
});
