const { Router } = require("express");
const router = Router();
const {createClasspass, allClasspass} = require("./controllers/classpass.controller.js");


router.post("/:activityId", async(req, res) =>{

    try{
        const {activityId} = req.params
        const {date, time, duration, capacity} = req.body
        console.log(activityId)

        await createClasspass(date, time, parseInt(duration), parseInt(capacity), activityId)
        res.status(200).json({message: "Classpass created successfully"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
    
})

router.get("/", async(req, res) =>{
    try{
        const Classpass = await allClasspass();
        res.status(200).json(Classpass);
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

module.exports = router;