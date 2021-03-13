const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const port = 5000 || process.env.PORT;

app.listen(port, () =>
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode at port ${port}.`
  )
);
