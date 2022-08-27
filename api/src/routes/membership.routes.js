const { Router } = require("express");
const router = Router();
const { createMembership, allMembership } = require("./controllers/membership.controller.js")

router.post("/", async (req, res) => {
     try {
          const { type, price, description } = req.body;
          const create = await createMembership(type, price, description);
          return res.status(200).json(create);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
})

router.get("/", async (req, res) => {
     try {
          const all = await allMembership();
          return res.status(200).json(all);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }

})

module.exports = router;
