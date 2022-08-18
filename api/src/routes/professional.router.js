const { Router } = require("express");
const {getProfessionals, postProfessionals} = require("./controllers/professional.controllers");


const router = Router();


router.get('/', async (req, res) => {
try {
    const profecionales = await getProfessionals();
    return res.status(200).json(profecionales);
} catch (error) {
    console.log(error);
}
});

router.post('/', async (req, res) => {
    try {
        const {name, image, info} = req.body;
        const creado = await postProfessionals(name, image, info);
        return res.status(200).json(creado);
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;
