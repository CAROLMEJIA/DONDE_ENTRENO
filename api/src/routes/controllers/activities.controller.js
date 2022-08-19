const {Activity, Classpass} = require("../../db/db.js")



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




module.exports ={
    createActivity,
    allActivities
}