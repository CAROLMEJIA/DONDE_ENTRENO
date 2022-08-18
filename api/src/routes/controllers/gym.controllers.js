const { Gym } = require('../../db/db.js');
async function getGym() {
try {
    const objInfo = {
        address: 'chacabuco 3096',
        phone: '3515930559',
        name: 'Henry Fitness',
        description: 'bla bla bla bla y mas bla bla'
    }
    await Gym.create(objInfo);
    const infoGym = await Gym.findAll();
return infoGym;
} catch (error) {
    console.log(error);
}
}
module.exports = {
    getGym,
}