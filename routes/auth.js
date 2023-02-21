const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  updateUserProfile,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
