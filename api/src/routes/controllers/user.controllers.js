const { User } = require("../../db/db.js");

async function createUser(name, mail, password, admin) {
  const newUser = {
    name: name,
    mail: mail,
    password: password, 
    admin: admin
  };

  return await User.create(newUser);
}

async function getAllUsers() {
  return await User.findAll();
}

const updateUser = async (id, password, address, birthday) => {
  const userUpdate = await User.findByPk(id);

  if (password) {
    userUpdate.password = password;
  }

  if (address) {
    userUpdate.address = address;
  }

  if (birthday) {
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
