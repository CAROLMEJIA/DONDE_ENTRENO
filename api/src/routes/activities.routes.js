const { Router } = require("express");
const {createActivity, allActivities, deleteActivity, activitiesUser} = require("./controllers/activities.controller.js")
const { Activity } = require ('../db/db.js')

const router = Router();

router.post("/", async (req, res) =>{
   
    try{
        const {name, image, description} = req.body
        await createActivity(name, image, description)
        res.status(200).json({message: "Activity created successfully"})
    }catch(error){
        res.status(400).json({message:error.message})
    }

})

router.get("/", async (req, res) =>{
    try{
       const activities = await allActivities()
       res.status(200).json(activities)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

router.get("/:idUser", async (req, res) =>{
    try{
       const {idUser} = req.params
       const activities = await activitiesUser(idUser)
       res.status(200).json(activities)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})


router.put('/:id', async (req, res)=>{
    try{
        let {id} = req.params
        let {name, image, description} = req.body
        let searchActivity = await Activity.findByPk({id})
        let upGradeAct = await searchActivity.update({name,image,description})
        res.status(200).json({message: "Activity created successfully" })
    }
    catch (error) {
        res.status(400).json({message: error.message}) 
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const all = await deleteActivity(id);
        res.status(200).json(all)
    } catch (error) {
        res.status(400).json({message: error.message})      
        
    }
})







module.exports = router;