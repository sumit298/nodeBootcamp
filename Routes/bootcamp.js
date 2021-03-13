const express = require("express");
const router = express.Router();

// For getting all bootcamps
router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all Bootcamps" });
});

// For getting single bootcamp with its id
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show the bootcamp with ${req.params.id}` });
});

// For adding a new bootcamp
router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: `Add a new bootcamp.` });
});

// For updating bootcamp with id
router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update the bootcamp with Id ${req.params.id}`,
  });
});

// For deleting bootcamp with id

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete the bootcamp with ${req.params.id}` });
});

module.exports = router;
