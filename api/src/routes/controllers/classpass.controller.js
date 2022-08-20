const {Classpass, Activity} = require("../../db/db.js");

async function createClasspass(date, time, duration, capacity, activityId){

    console.log(date, time,duration, capacity, activityId)
    const newClasspass = await Classpass.create({
        date, 
        time,
        duration,
        capacity,
        activityId 
    });
}

async function allClasspass(){
    const all = await Classpass.findAll({
            include:    {model: Activity, 
                        attributes: {exclude: [ 'createdAt', 'updatedAt','deletedAt']}
                        },
            attributes: {exclude: ['activityId', 'createdAt', 'updatedAt','deletedAt']},
    
    });
    return all;
}


module.exports = {
    createClasspass,
    allClasspass
}