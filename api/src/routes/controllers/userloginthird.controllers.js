const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");
const { makeToken } = require("../../utils/sessionHandler.js");


async function userExists(mail) {
  // chequeo si existe el usuario
  const findUser = await User.findOne({ where: { mail: mail } });

  return findUser ? findUser : null;
}

async function loginCheck(mail, password, findUser) {
  if (hashPassword(password, mail) === findUser.dataValues.password) {
    const token = makeToken(
      findUser.dataValues.id,
      findUser.dataValues.mail,
      false
      //findUser.dataValues.admin
    );
    return { token, findUser };
  } else {
    return null;
  }
}

module.exports = {
  userExists,
  loginCheck,
};
