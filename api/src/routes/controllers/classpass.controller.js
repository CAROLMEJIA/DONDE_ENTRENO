const {Classpass, Activity} = require("../../db/db.js");


async function createClasspass( time, duration, capacity, activityId, day){

    
    const newClasspass = await Classpass.create({
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
            attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']},
    
    });
    return all;
}

async function updateClasspass(activityId, time){
   const update = await Classpass.findOne(
        {
            where: {
            activityId : activityId,
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

async function deleteClasspass(id){
    await Classpass.destroy({where: {id}})
    const allClasspass = Classpass.findAll({
        include:    {model: Activity, 
                    attributes: {exclude: [ 'createdAt', 'updatedAt','deletedAt']}
                    },
        attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']},

});
    return allClasspass;
}



module.exports = {
    createClasspass,
    allClasspass,
    updateClasspass,
    deleteClasspass
}
