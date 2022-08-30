const { Router } = require("express");
const { getGym, updateGym } = require("./controllers/gym.controllers");


const router = Router();


router.get('/', async (req, res) => {
    try {
        const profecionales = await getGym();
        return res.status(200).json(profecionales);
    } catch (error) {
       console.log(error);
    }
});

router.put('/:id', async (req, res) =>{
    try{
        
        const {id} = req.params;
        const {address, phone, name, description} = req.body;
        const update = await updateGym(id, address, phone, name, description)
        return res.status(200).json(update);

    }catch (error) {

        res.status(400).json({message: error.message}) 
    }
})

module.exports = router;