const { Router } = require("express");
const {createActivity, allActivities} = require("./controllers/activities.controller.js")
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


router.put('/:id', async (req, res)=>{
    try{
        let {id} = req.params
        let {name, image, description} = req.body
        let searchActivity = await Activity.findByPk({id})
        let upGradeAct = await searchActivity.update({name,image,description})
        res.status(200).json({message: "Activity created successfully" })
    }
    catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let {id} = req.params
        await Activity.destroy({where: {id: id}})
        res.status(200).json({message: "Activity Deleted"})
    } catch (error) {
        res.status(404).json({message: 'Not Destroyed :C'})      
        console.log(error)  
    }
})







module.exports = router;