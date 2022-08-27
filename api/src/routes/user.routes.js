const { Router } = require("express");
const { mandarMail } = require("../utils/mailing.js");
const { loginCheck } = require("./controllers/userlogin.controllers.js");
const { User } = require('../db/db.js')
const router = Router();
const {
  createUser,
  getAllUsers,
  updateUser
} = require("./controllers/user.controllers.js");

router.post("/", async (req, res, next) => {
  // recibe por body las propiedades de user
  const { name, mail, password, admin } = req.body;

  if (!name || !mail || !password) {
    return res.status(400).send("Faltan datos obligatorios.");
  }

  // si estan, creo un user
  try {
    await createUser(name, mail, password, admin);

    mandarMail(
      mail,
      "Gracias por registrarte",
      `Hola ${name}, felicitaciones, tomaste el primer paso a una vida más sana!`
    );

    try {
      const result = await loginCheck(mail, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send("Error de login");
    }

  } catch (e) {
    res.status(400).send("Error al crear usuario");
  }
});

router.put("/", async (req, res) => {
  try {
    const { id, password, address, birthday } = req.body;
    const update = await updateUser(id, password, address, birthday);
    return res.status(200).json(update);  
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send("Error. No se encontraron usuarios.");
  }
});

module.exports = router;
