const { Admin } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function loginCheck(mail, password) {
  const findAdmin = await Admin.findOne({ where: { mail: mail }});

  if (!findAdmin) {
    return "El email es incorrecto";
  } else if (
    hashPassword(password, findAdmin.dataValues.mail) === findAdmin.dataValues.password) {
    const token = jwt.sign(
      {
        id: findAdmin.dataValues.id,
        mail: findAdmin.dataValues.mail,
      },
      SECRET,
      {
        expiresIn: 60 * 60 * 24,
      }
    );

    return { token, findAdmin};
  } else {
    return "Contraseña incorrecta";
  }
}

module.exports = {
  loginCheck,
};
