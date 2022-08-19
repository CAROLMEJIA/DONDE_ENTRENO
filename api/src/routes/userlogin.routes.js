const { Router } = require("express");
const router = Router();
const { loginCheck } = require("./controllers/userlogin.controllers.js");

router.post("/", async (req, res, next) => {
  const { mail, password } = req.body;

  try {
    const result = await loginCheck(mail, password);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Error de login");
  }
});

module.exports = router;
