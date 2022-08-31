const { User } = require("../../db/db.js");
const { hashPassword } = require("../../utils/hashing.js");


async function createUser(name, mail, password, admin) {
  const newUser = {
    name: name,
    mail: mail,
    password: hashPassword(password, mail), 
    admin: admin
  };

  return await User.create(newUser); 
}

async function getAllUsers() {
  return await User.findAll();
}

const getUserInfo = async (id) => {
  let userdata =  await User.findByPk(id)
  return userdata
}

const updateUser = async (id, password, dni, address, birthday, image) => {
  const userUpdate = await User.findByPk(id);
  console.log(address);
  if (password) {
    userUpdate.password = hashPassword(password, userUpdate.mail);
  }

  if (dni) {
    userUpdate.dni = dni;
  }

  if (address) {
    userUpdate.address = address;
  }

  if (birthday) {
    userUpdate.birthday = birthday;
  }

  if (image) {
    userUpdate.image = image;
  }

  await userUpdate.save();

  return userUpdate;
}


async function deleteUser(id, paranoid){
      
      if(paranoid){
        await User.destroy({
          where: {
            id
          }
        })
        return "Usuario inactivado correctamente"
      }else if(!paranoid){
        await User.destroy({
          where:{ 
            id
          },
          force: true
        })
        return "Usuario eliminado correctamente"
      }

}



module.exports = {
  createUser,
  getAllUsers,
  getUserInfo,
  updateUser,
  deleteUser,

};
