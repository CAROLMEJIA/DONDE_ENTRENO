const {Activity, Classpass, User} = require("../../db/db.js");
const { Op } = require("sequelize");



async function createActivity(name, image, description){

    const newActivity = await Activity.create({
        name,
        image, 
        description
    })
}


async function allActivities(){
   
    const all = await Activity.findAll({attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']}})

    return all;
}

async function activitiesUser(userId){
    const activities = await Activity.findAll({
        include: {
            model: User,
            attributes: ['id', 'name','mail', 'admin'],
            where:{
                id: userId
            }
             
        },
        attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']}
        
    })

    console.log(activities)
    return activities
}

async function deleteActivity(id){

     await Activity.destroy({where: {id: id}})
     const allActivities = Activity.findAll();
     return allActivities;
}




module.exports ={
    createActivity,
    allActivities,
    deleteActivity,
    activitiesUser   
}