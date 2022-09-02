const { Router } = require("express");
const { paymentStripe } = require("./controllers/stripe.controller.js");
const {getUserInfo} = require("./controllers/user.controllers");
const router = Router();

router.post("/", async (req, res) => {
    try {
        const { userId, membershipId, membershipPrice, membershipType, dni, address, birthday } = req.body.info
        const { id } = req.body.paymentMethod
        const payment = await paymentStripe(userId, membershipId, membershipPrice, membershipType, dni, address, birthday, id)
        
        if (payment.message) {
            res.status(400).json({ message: payment.message })
        } else {
            const user = await getUserInfo(userId);
            return res.status(200).json(payment);
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;