const { Router } = require("express");
const router = Router();
const {
  createUser,
  getAllUsers,
} = require("./controllers/user.controllers.js");

router.post("/", async (req, res, next) => {
  // recibe por body las propiedades de user
  const { name, mail, password } = req.body;

  // verifica si los datos obligatorios estan presentes
  if (!name || !mail || !password) {
    return res.status(400).send("Faltan datos obligatorios.");
  }

  // si estan, creo un user
  try {
    await createUser(name, mail, password);
    res.status(200).send("Usuario creado con exito");
  } catch (e) {
    res.status(400).send("Error al crear usuario");
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