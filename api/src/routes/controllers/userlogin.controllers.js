const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");

async function loginCheck(mail, password) {
  const findUser = await User.findOne({ where: { mail: mail } });

  if (!findUser) {
    return "Mail y/o contraseña incorrecta";
  } else if (
    hashPassword(password, findUser.dataValues.mail) ===
    findUser.dataValues.password
  ) {
    let token = makeToken(
      findUser.dataValues.id,
      findUser.dataValues.mail,
      false
      //findUser.dataValues.admin
    );

    return { token, findUser };
  } else {
    return "Mail y/o contraseña incorrecta";
  }
}

module.exports = {
  loginCheck,
};
