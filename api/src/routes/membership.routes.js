const { Router } = require("express");
const router = Router();
const {
  createMembership,
  allMembership,
  deleteMembership,
  updateMembership,
} = require("./controllers/membership.controller.js");

router.post("/", async (req, res) => {
  try {
    const { type, price, description } = req.body;
    const create = await createMembership(type, price, description);
    return res.status(200).json(create);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const all = await allMembership();
    return res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await deleteMembership(id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { type, price, description } = req.body;

    const update = await updateMembership(id, type, price, description);
    return res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
