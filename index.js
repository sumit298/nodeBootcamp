const express = require("express");
const dotenv = require("dotenv");
const bootcampRouter = require('./Routes/bootcamp')
const app = express();

dotenv.config({ path: "./config/config.env" });
// MiddleWare for bootcamp Router
app.use('/api/v1/bootcamps', bootcampRouter);

const port = 5000 || process.env.PORT;

app.listen(port, () =>
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode at port ${port}.`
  )
);
