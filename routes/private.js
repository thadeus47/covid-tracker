const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middleware/auth");
const { updateUserProfile } = require("../controllers/private");

router.route("/").get(protect, getPrivateRoute);
// router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
