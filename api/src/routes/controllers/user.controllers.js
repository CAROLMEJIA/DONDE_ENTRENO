const { User } = require("../../db/db.js");

async function createUser(name, mail, password) {
  const newUser = {
    name: name,
    mail: mail,
    password: password, // falta encriptar
  };

  return await User.create(newUser);
}

async function getAllUsers() {
  return await User.findAll();
}

module.exports = {
  createUser,
  getAllUsers,
};
