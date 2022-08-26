const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function userExists(mail) {
  // chequeo si existe el usuario
  const findUser = await User.findOne({ where: { mail: mail } });

  return findUser ? findUser : null;
}

async function loginCheck(mail, password, user) {
  if (hashPassword(password, mail) === user.dataValues.password) {
    const token = jwt.sign(
      {
        id: user.dataValues.id,
        mail: user.dataValues.mail,
      },
      SECRET,
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    return { token, user };
  } else {
    return null;
  }
}

module.exports = {
  userExists,
  loginCheck,
};
