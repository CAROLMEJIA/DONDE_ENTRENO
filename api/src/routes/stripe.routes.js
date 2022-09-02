const { Router } = require("express");
const { paymentStripe } = require("./controllers/stripe.controller.js");
const {getUserInfo} = require("./controllers/user.controllers");
const router = Router();

const path = require('node:path');
const fs = require('fs');
const handlebars = require("handlebars");
const filePath = path.join(__dirname, '../utils/templates/invoice.html');
const source = fs.readFileSync(filePath, 'utf-8').toString();
const template = handlebars.compile(source);
const { MAIL_PORT} = process.env;
const url=`${MAIL_PORT}/home`;





router.post("/", async (req, res) => {
    try {
        const { userId, membershipId, membershipPrice, membershipType, dni, address, birthday } = req.body.info
        const { id } = req.body.paymentMethod
        const payment = await paymentStripe(userId, membershipId, membershipPrice, membershipType, dni, address, birthday, id)
        
        if (payment.message) {
            res.status(400).json({ message: payment.message })
        } else {
            const user = await getUserInfo(userId);
            const mail=user.dataValues.mail;
            const init=payment.start_date;
            const finish=payment.end_date;

            const replacements = {
                url:url,
                name:user.dataValues.name,
                membershipPrice: membershipPrice,
                membershipType: membershipType,
                init:init,
                finish:finish,
              
            };
            const htmlToSend = template(replacements);
            mandarMail(
                mail,
                "Gracias por registrarte",
                `Hola , felicitaciones, tomaste el primer paso a una vida más sana!`,
                htmlToSend 
              );
















            return res.status(200).json(payment);
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;