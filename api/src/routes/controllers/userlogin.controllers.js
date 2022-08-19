const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function loginCheck(mail, password) {
  const findUser = await User.findOne({ where: { mail: mail }});

  if (!findUser) {
    return "El email es incorrecto";
  } else if (
    hashPassword(password, findUser.dataValues.mail) === findUser.dataValues.password) {
    const token = jwt.sign(
      {
        id: findUser.dataValues.id,
        mail: findUser.dataValues.mail,
      },
      SECRET,
      {
        expiresIn: 60 * 60 * 24,
      }
    );

    return { token, findUser};
  } else {
    return "Contraseña incorrecta";
  }
}

module.exports = {
  loginCheck,
};
