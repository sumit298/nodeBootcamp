const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

// For getting all bootcamps
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all Bootcamps" });
});

// For getting single bootcamp with its id
app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show the bootcamp with ${req.params.id}` });
});

// For adding a new bootcamp
app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: `Add a new bootcamp.` });
});

// For updating bootcamp with id
app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Update the bootcamp with Id ${req.params.id}`,
    });
});

// For deleting bootcamp with id

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete the bootcamp with ${req.params.id}` });
});

const port = 5000 || process.env.PORT;

app.listen(port, () =>
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode at port ${port}.`
  )
);
