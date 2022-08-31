const { Router } = require("express");
const router = Router()
const { subscriptionUser } = require("./controllers/subscription.controller.js");

router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const subscription = await subscriptionUser(userId);
        console.log(subscription)
        if(subscription === "El usuario no tiene una suscripción"){
            res.status(400).json(subscription);
        }else{
            res.status(200).json(subscription)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router