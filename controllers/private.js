exports.getPrivateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Private route",
  });
};

exports.updateUserProfile = async (req, res) => {};
