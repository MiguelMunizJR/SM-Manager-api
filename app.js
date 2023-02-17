const express = require("express");
const cors = require("cors");
const PORT = require("./src/utils/config").port;
require("./src/db/database");

//* import router
// const usersRouter = require("./src/users/users.router");
const tasksRouter = require("./src/tasks/tasks.router");
const clientsRouter = require("./src/clients/clients.router");
const authRouter = require("./src/auth/auth.router");
//* import init models
const initModels = require("./src/models/initModels");

const app = express();

//* JSON, Cors and initModels
app.use(express.json());
app.use(cors());
initModels();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "Hello world!",
    })
    .end();
});

//* Routes
// app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/clients", clientsRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`🌐 Server online at port: ${PORT}`);
});
