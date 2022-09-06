const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");
const {subscriptionActive} = require("./subscription.controller.js");


async function userExists(mail) {
  // chequeo si existe el usuario
  const findUser = await User.findOne({ where: { mail: mail } });

  if(findUser){
    const subscrip = await subscriptionActive(findUser.id)
    console.log(subscrip)
  }

  return findUser ? findUser : null;
}

async function loginCheck(mail, password, userData) {
  if (hashPassword(password, mail) === userData.dataValues.password) {
    const token = makeToken(
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

      if(userData.id){
        const subscrip = await subscriptionActive(userData.id);
      }

    return { token, findUser };
  } else {
    return null;
  }
}

module.exports = {
  userExists,
  loginCheck,
};
