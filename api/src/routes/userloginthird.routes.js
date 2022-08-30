const { Router } = require("express");
const { mandarMail } = require("../utils/mailing.js");
const {
  userExists,
  loginCheck,
} = require("./controllers/userloginthird.controllers.js");
const { createUser } = require("./controllers/user.controllers.js");

const router = Router();

router.post("/", async (req, res, next) => {
  // recibe por body las propiedades de user
  const { name, mail, password } = req.body;
  //console.log("datos body: ", req.body);

  // verifica si los datos obligatorios estan presentes
  if (!name || !mail || !password) {
    return res.status(400).send("Faltan datos obligatorios.");
  }

  try {
    const user = await userExists(mail);  // me fijo si el mail esta registrado

    if (user) {
      const result = await loginCheck(mail, password, user);  // si si, chequeo si tiene una contrasena valida

      if (result) {
        res.status(200).send(result);   // si si, mando token y datos
      } else {
        res.status(400).send({ message: "Mail y/o contraseña incorrecta" });  // sino error (ya se registro antes con el mismo mail x ejemplo)
      }
    } else {
      const newUser = await createUser(name, mail, password);  // si no existe el mail, creo un user nuevo

      // le mando mail wii
      mandarMail(
        mail,
        "Gracias por registrarte",
        `Hola ${name}, felicitaciones, tomaste el primer paso a una vida más sana!`
      );

      const result = await loginCheck(mail, password, newUser); // logueo al usuario 

      res.status(200).send(result);  // le mando token y datos
    }
  } catch (error) {
    res.status(400).send({ message: "Error de login", error: error });  // si hay algun error en algun paso vuela todo
  }
});

module.exports = router;
