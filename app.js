const express = require("express");
const app = express();
const PORT = 8001;

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
