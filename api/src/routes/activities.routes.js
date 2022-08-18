const { Router } = require("express");
const {createActivity, allActivities} = require("./controllers/activities.controller.js")

const router = Router();

router.post("/", async (req, res) =>{
   
    try{
        const {name} = req.body
        await createActivity(name)
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









module.exports = router;