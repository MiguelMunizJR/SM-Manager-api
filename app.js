const express = require("express");
const cors = require("cors");
const compression = require("compression");
const PORT = require("./src/utils/config").port;
require("./src/db/database");

//* import router
const usersRouter = require("./src/users/users.router");
const tasksRouter = require("./src/tasks/tasks.router");
const clientsRouter = require("./src/clients/clients.router");
const authRouter = require("./src/auth/auth.router");
//* import init models
const initModels = require("./src/models/initModels");
//* import swagger.JSON
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

const app = express();

//* JSON, Cors, Compression and initModels
app.use(express.json());
app.use(cors());
app.use(compression());
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
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/clients", clientsRouter);
app.use("/api/v1/auth", authRouter);

//* SWAGGER
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log(`🌐 Server online at port: ${PORT}`);
});
