const { Router } = require("express");
const router = Router();
const {getUsersInactive, restoreUser} = require("./controllers/userInactive.controller.js");

router.get("/", async (req, res) =>{
    try{
          
      const usersInactive = await getUsersInactive()
      console.log(usersInactive)
      res.status(200).json(usersInactive);
    }catch(error){
      res.status(400).json({ message: error.message });
    }
  
  })


router.put("/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const restore = await restoreUser(id)
        //console.log(restore)
        res.status(200).json(restore);

    }catch(error){
        res.status(400).json({ message: error.message });
    }
})




module.exports = router;