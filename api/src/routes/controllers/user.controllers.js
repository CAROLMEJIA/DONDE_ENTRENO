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

const updateUser = async (id, password, address, birthday) => {
  const userUpdate = await User.findByPk(id);

  if (password) {
    userUpdate.name = name;
  }

  if (image) {
    userUpdate.address = address;
  }

  if (info) {
    userUpdate.birthday = birthday;
  }

  await userUpdate.save();

  return userUpdate;
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser
};
