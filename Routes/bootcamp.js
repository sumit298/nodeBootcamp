const express = require("express");
const router = express.Router();
const {
  getBookCampById,
  deleteBootCampById,
  getBootcamps,
  postBootCamp,
  updateBootCampById,
} = require("../Controllers/bootcampControllers");

router.route('/').get(getBootcamps).post(postBootCamp)

router.route('/:id').get(getBookCampById).put(updateBootCampById).delete(deleteBootCampById);

module.exports = router;
