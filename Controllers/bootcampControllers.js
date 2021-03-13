// Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// Public Route Callback
exports.getBookCampById = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show single bootcamp of this ${req.params.id}`,
  });
};


// Private Route
exports.postBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Post the new bootcamp" });
};


// Private Route 
exports.updateBootCampById = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Update this bootcamp by this ${req.params.id}`,
    });
};


// Private Route
exports.deleteBootCampById = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Delete the bootcamp of this ${req.params.id}`,
    });
};
