const { mandarMail } = require("../utils/mailing.js");
const { User } = require("../db/db.js");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res, next) => {
  const { password} = req.body;


  async function loginMail(mail) {
    const userData = await User.findOne({ where: { mail: mail } });
    if (!userData) {
      return "El email no esta en base de datos";
    } 
    
  }
  try {
    const result = await loginMail(password);
    res.status(200).send(password);
  } catch (error) {
    res.status(400).send("Error de recuperacion");
  }
});

module.exports = router;
