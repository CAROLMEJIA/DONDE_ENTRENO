const { Router } = require("express");
const user = require("./user.routes.js");
const router = Router();

router.use("/user", user);





module.exports = router;
