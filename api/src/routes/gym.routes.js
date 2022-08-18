const { Router } = require("express");
const { getGym } = require("./controllers/gym.controllers");


const router = Router();


router.get('/', async (req, res) => {
    try {
        const profecionales = await getGym();
        return res.status(200).json(profecionales);
    } catch (error) {
       console.log(error);
    }
});

module.exports = router;