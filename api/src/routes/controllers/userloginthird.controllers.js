const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");


async function userExists(mail) {
  // chequeo si existe el usuario
  const findUser = await User.findOne({ where: { mail: mail } });

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

    return { token, findUser };
  } else {
    return null;
  }
}

module.exports = {
  userExists,
  loginCheck,
};
