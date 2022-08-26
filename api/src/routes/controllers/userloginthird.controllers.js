const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");


async function userExists(mail) {
  // chequeo si existe el usuario
  const findUser = await User.findOne({ where: { mail: mail } });

  return findUser ? findUser : null;
}

async function loginCheck(mail, password, user) {
  if (hashPassword(password, mail) === user.dataValues.password) {
    const token = makeToken(
      user.dataValues.id,
      user.dataValues.mail,
      false
      //user.dataValues.admin
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
