const { Router } = require("express");
const {paymentStripe} = require("./controllers/stripe.controller.js")
const router = Router();



router.post("/", async(req, res) =>{
    try{
        
        const {userId, membershipId, membershipPrice, membershipType } = req.body.info
        const {id} = req.body.paymentMethod
        //console.log(userId, membershipId, membershipPrice, id);
        
       const payment = await paymentStripe(userId, membershipId, membershipPrice, membershipType, id)

        console.log(payment)

        return res.status(200).json(payment);

    }catch(error){
        res.json({message:error.message})//message:error.raw.message
    }
})

module.exports = router;