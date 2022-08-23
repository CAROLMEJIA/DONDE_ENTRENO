const { Router } = require("express");
const {getProfessionals, postProfessionals, deleteProfessional, updateProfessional} = require("./controllers/professional.controllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const profecionales = await getProfessionals();
    return res.status(200).json(profecionales);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, info } = req.body;
    console.log(name, image, info);
    const creado = await postProfessionals(name, image, info);
    return res.status(200).json(creado);
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) =>{
    try{

    const {id} = req.params;
    const {name, image, info} = req.body;
    const update = await updateProfessional(id, name, image, info)
    return res.status(200).json(update);

    }catch(error){
        res.status(400).json({message:error.message})
    }
})

router.delete('/:id', async (req, res) =>{

    try{
        const {id} = req.params;
        const all = await deleteProfessional(id);
        return res.status(200).json(all);
    }catch(error){
        res.status(404).json(error)
    }

});


module.exports = router;
