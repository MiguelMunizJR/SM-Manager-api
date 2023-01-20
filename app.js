const express = require("express");
const app = express();
const cors = require("cors");
const PORT = require("./src/utils/config").port;
require("./src/db/database");

//* import router
const usersRouter = require("./src/users/users.router");

//* JSON and Cors
app.use(express.json());
app.use(cors());

//* Routes
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world!"
  }).end();
});

app.listen(PORT, () => {
  console.log(`🌐 Server online at port: ${PORT}`);
});
