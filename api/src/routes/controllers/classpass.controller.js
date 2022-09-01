const { Classpass, Activity } = require("../../db/db.js");


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

async function updateClasspass(activityId) {
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
