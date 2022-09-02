const { Router } = require("express");
const { paymentStripe } = require("./controllers/stripe.controller.js")
const router = Router();

router.post("/", async (req, res) => {
    try {
        const { userId, membershipId, membershipPrice, membershipType, dni, address, birthday } = req.body.info
        const { id } = req.body.paymentMethod
        console.log(userId, membershipId, membershipPrice, membershipType, dni, address, birthday, id)
        const payment = await paymentStripe(userId, membershipId, membershipPrice, membershipType, dni, address, birthday, id)
        console.log(payment)
        if (payment.message) {
            res.status(400).json({ message: payment.message })
        } else {
            
            return res.status(200).json(payment);
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
        //res.json({message:error.message})//message:error.raw.message
    }
})

module.exports = router;