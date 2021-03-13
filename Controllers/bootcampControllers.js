exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

exports.getBookCampById = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show single bootcamp of this ${req.params.id}`,
  });
};

exports.postBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Post the new bootcamp" });
};

exports.updateBootCampById = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Update this bootcamp by this ${req.params.id}`,
    });
};

exports.deleteBootCampById = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Delete the bootcamp of this ${req.params.id}`,
    });
};
