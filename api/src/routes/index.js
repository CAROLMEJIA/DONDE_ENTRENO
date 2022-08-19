const { Router } = require("express");
const gym = require("./gym.routes");
const user = require("./user.routes.js");
const activity = require("./activities.routes.js");
const professional = require("./professional.router");
const classpass = require("./classpass.routes.js");
const router = Router();

router.use('/gym', gym);
router.use("/user", user);
router.use("/activity", activity);
router.use('/professional', professional);
router.use('/classpass', classpass);



module.exports = router;

