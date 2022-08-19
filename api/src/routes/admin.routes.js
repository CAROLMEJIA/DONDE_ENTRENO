const { Router } = require("express");
const router = Router();
const {createAdmin} = require("./controllers/admin.controllers.js");

router.post("/", async (req, res, next) => {
  const { name, mail, password } = req.body;

  if (!name || !mail || !password) {
    return res.status(400).send("Faltan datos obligatorios.");
  }

  try {
    await createAdmin(name, mail, password);
    res.status(200).send("Admin creado con exito");
  } catch (e) {
    res.status(400).send("Error al crear admin");
  }
});

module.exports = router;