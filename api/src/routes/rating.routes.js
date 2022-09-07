const { Router } = require("express");
const router = Router();
const {
  getAllRatings,
  getActivityRating,
  addActivityRating,
  modifActivityRating,
  getUserActivityRating,
} = require("./controllers/rating.controller.js");

router.get("/", async (req, res) => {
  try {
    const rating = await getAllRatings(); // devuelve un array de objetos con id de actividad, valoracion y cantidad de votos

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;    
    const rating = await getUserActivityRating(userId); // devuelve un array de objetos con id de actividad, valoracion y cantidad de votos

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await getActivityRating(id); // devuelve un objeto con id de actividad, valoracion y cantidad de votos

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { activityId, userId, value } = req.body;

    if (!activityId || !userId || !value) {
      res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const rating = await addActivityRating(activityId, userId, value);

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/", async (req, res) => {
  // Devuelve EHHHHH, NOPE
  try {
    //const { id } = req.params;   // Id de la puntuacion especifica del usuario ??
    const { activityId, userId, value } = req.body;

    if (!activityId || !userId || !value) {
      res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const rating = await modifActivityRating(activityId, userId, value);

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
