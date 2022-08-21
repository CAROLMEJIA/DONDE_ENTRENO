const {Classpass, Activity} = require("../../db/db.js");

async function createClasspass(date, time, duration, capacity, activityId, day){

    
    const newClasspass = await Classpass.create({
        date, 
        time,
        duration,
        capacity,
        activityId,
        day 
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

async function updateClasspass(activityId, date, time){
   const update = await Classpass.findOne(
        {
            where: {
            activityId : activityId,
            date: date,
            time: time
        }})
        

    if(update){
        update.capacity = (update.capacity-1)
        await update.save();
        return update;
    }else{
        return null;
    }
 
}



module.exports = {
    createClasspass,
    allClasspass,
    updateClasspass
}
