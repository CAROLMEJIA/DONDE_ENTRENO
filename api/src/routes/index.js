const { Router } = require("express");
const professional = require("./professional.router")



const router = Router();

router.use('/professional', professional);

module.exports = router;
