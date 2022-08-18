const { Router } = require("express");
const activity = require("./activities.routes.js");
const professional = require("./professional.router");

const router = Router();

router.use("/activity", activity);
router.use("/activities", activity);
router.use('/professional', professional);


module.exports = router;
