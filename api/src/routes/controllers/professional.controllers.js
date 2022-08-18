const { Professional } = require('../../db/db.js');
async function getProfessionals() {
    try {
        const professionals = await Professional.findAll();
        if (professionals.length > 0) {
            return professionals;
        };
        return 'no se encuentran profesionales';

    } catch (error) {
        console.log(error);
    }
};

async function postProfessionals(name, image, info) {
    try {

        if (!name || !image || !info) return 'se requieren campos';
        const profecional = {
            name: name,
            info: info,
            image: image
        }

        const create = await Professional.create(profecional);
        return create;

    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    getProfessionals,
    postProfessionals,
}
