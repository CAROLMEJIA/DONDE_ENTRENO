const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");
const {subscriptionActive} = require("./subscription.controller.js");

async function loginCheck(mail, password) {
  const userData = await User.findOne({ where: { mail: mail } });
  //console.log('messi', userData)
  if (!userData) {
    return "Mail y/o contraseña incorrecta";
  } else if (
    hashPassword(password, userData.dataValues.mail) ===
    userData.dataValues.password
  ) {
    let token = makeToken(
      userData.dataValues.id,
      userData.dataValues.mail,
      userData.dataValues.admin,
      true
    );

    const findUser = {
      id: userData.id,
      name: userData.name,
      mail: userData.mail,
      admin: userData.admin,
      address: userData.address,
      birthday: userData.birthday,
      dni: userData.dni,
      image: userData.image,

    }
    if(findUser){
      const subscrip = await subscriptionActive(findUser.id)
      console.log(subscrip)
    }

    return { token, findUser };
  } else {
    return "Mail y/o contraseña incorrecta";
  }
}

module.exports = {
  loginCheck,
};
