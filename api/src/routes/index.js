const { Router } = require("express");
const activity = require("./activities.routes.js")

const router = Router();

router.use("/activity", activity);
router.use("/activities", activity);

module.exports = router;
