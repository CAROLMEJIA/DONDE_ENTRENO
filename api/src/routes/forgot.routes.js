const { mandarMail } = require("../utils/mailing.js");
const { User } = require("../db/db.js");
const { Router } = require("express");
const router = Router();
const path = require('node:path');
const fs = require('fs');
const handlebars = require("handlebars");
const filePath1 = path.join(__dirname, '../utils/templates/resetpassword.html');
const source1 = fs.readFileSync(filePath1, 'utf-8').toString();
const { MAIL_PORT} = process.env;
const template1 = handlebars.compile(source1);





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
     const url=`${MAIL_PORT}/RecuperarContrasena/?mail=${userData.mail}`
     
      const replacements1 = {
        username: url
    };
     const htmlToSend1 = template1(replacements1);

      mandarMail(
        mail,
        "Te enviamos el siguiente enlace para que coloques una contraseña nueva",
        "hola",
         htmlToSend1
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
