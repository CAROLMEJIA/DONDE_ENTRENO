const { mandarMail } = require("../utils/mailing.js");
const { User } = require("../db/db.js");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res, next) => {
  const { mail } = req.body;

  if (mail == "") {
    res.status(400).send("el email es requerido");
  }

  async function loginMail(mail) {
    const userData = await User.findOne({ where: { mail: mail } });
    if (!userData) {
      return "El email no esta en base de datos";
    } else {

      mandarMail(
        mail,
        "Te enviamos el siguiente enlace para que coloques una contraseña nueva",
        `hola ${mail}`
      );
      return `Hola hemos enviado un enlace a  ${mail} para recupearar la contraseña`;
     
    }
  }
  try {
    const result = await loginMail(mail);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Error de recuperacion");
  }
});

module.exports = router;
