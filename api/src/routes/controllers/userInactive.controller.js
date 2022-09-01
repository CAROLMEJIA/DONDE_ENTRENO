const { User } = require("../../db/db.js");
const { Op } = require("sequelize");


async function getUsersInactive(){

    const usersInactive = await User.findAll({
      
        where:{
          deletedAt:{
            [Op.ne]:null
          },  
      },
      paranoid: false
    })
    //console.log("controller", usersInactive)
  
    return usersInactive
  
  }

async function restoreUser(id){
    const restoreU = await User.restore({
        where:{
            id: {
                [Op.eq]: id
            }
        }
    })
    
    return "Usuario restaurado correctamente"
}

module.exports ={
    getUsersInactive,
    restoreUser
}