const express = require("express");
const page1 = require("../controllers/page1");
const catchAsync = require("../catchAsync");

const router = express.Router();

router.route("/").get(page1.page1);

router.route("/fetch").get(page1.fetchusers);
router.route("/delete").get(page1.deleteusers);
router.route("/page2").get(catchAsync(page1.userdetails));

module.exports = router;
