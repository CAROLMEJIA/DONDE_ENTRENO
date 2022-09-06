const { mandarMail } = require("../utils/mailing.js");
const { hashPassword } = require("../utils/hashing.js");

const { User } = require("../db/db.js");
const { Router } = require("express");
const router = Router();

router.put("/", async (req, res, next) => {
  const {password,confirmpassword,mail} = req.body;

 async function changepassword(infopassword,infomail) {
    const update = await User.update({
        password:hashPassword(infopassword, infomail),
    },  
      { where: { mail: infomail} });
    if(update){
      return "Su contraseña ha sido actualizada"
    }
    }

    try {
      const result = await changepassword(password,mail);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send("Error de recuperacion");
    }

})

module.exports = router;
