const { Router } = require("express");
const gym = require("./gym.routes");



const router = Router();

router.use('/gym', gym);

module.exports = router;