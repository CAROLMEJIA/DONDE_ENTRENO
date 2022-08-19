const {Activity, Classpass} = require("../../db/db.js")



async function createActivity(name){

    const newActivity = await Activity.create({
        name
    })
}


async function allActivities(){
   
    const all = await Activity.findAll()

    return all;
}




module.exports ={
    createActivity,
    allActivities
}