const { Classpass, Activity, User} = require("../../db/db.js");
//const {findActivity} = require("./activities.controller.js");



async function createClasspass(time, duration, capacity, activityId, day) {


    const newClasspass = await Classpass.create({
        time,
        duration,
        capacity,
        activityId,
        day
    });
}

async function allClasspass() {
    const all = await Classpass.findAll({
        include: {
            model: Activity,
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
        },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },

    });
    return all;
}

async function updateClasspass(activityId, userId) {
    const classPass1 = await Classpass.findAll({
        where: {
            activityId: activityId
        },
        attributes: { exclude: ['day','id','date','time','duration','createdAt','updatedAt', 'deletedAt', 'activityId'] },
    })
    const capacity = classPass1.find(e => e.dataValues.capacity)
    const up = await Classpass.update(
        {
            capacity:  (capacity.dataValues.capacity - 1) 
        },
        {
            where: {
                activityId: activityId,

            }
        },
    )

    
    const activity = await Activity.findByPk(id = activityId);
    const user = await User.findByPk(userId);
    await activity.addUser(user);

return up;

}

async function deleteClasspass(id) {
    await Classpass.destroy({ where: { id } })
    const allClasspass = Classpass.findAll({
        include: {
            model: Activity,
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
        },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },

    });
    return allClasspass;
}



module.exports = {
    createClasspass,
    allClasspass,
    updateClasspass,
    deleteClasspass
}
