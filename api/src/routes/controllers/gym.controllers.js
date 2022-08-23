const { Gym } = require('../../db/db.js');



async function getGym() {
    try {
        const objInfo = {
            address: 'chacabuco 3096',
            phone: '3515930559',
            name: 'Henry Fitness',
            description: 'Henry Fitness nace para brindar acompañamiento con los mejores profesionales en diferentes especialidades a las personas que desean mejorar su calidad de vida a través del ejercicio, contamos con equipos de alta tecnología para mejorar tu rendimiento y así puedas entrenar de forma segura'
        }

        const infoGym = await Gym.findAll();
        if(infoGym.length > 0){
            console.log(infoGym)
            return infoGym;
        }else{
            await Gym.create(objInfo);
            const infoGym = await Gym.findAll();
            console.log(infoGym)
            return infoGym
        }
        
    
    } catch (error) {
        console.log(error);
}
}


async function updateGym(id, address, phone, name, description){

    const putGym = await Gym.findByPk(id);
   
    if(address){
        putGym.address = address;
    }

    if(phone){
        putGym.phone = phone;
    }

    if(name){
        putGym.name = name;
    }

    if(description){
        putGym.description = description;
    }

    
    await putGym.save();
    return putGym;
}



module.exports = {
    getGym,
    updateGym
}