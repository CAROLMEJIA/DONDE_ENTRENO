const { Professional } = require("../../db/db.js");
async function getProfessionals() {
  try {
    const professionals = await Professional.findAll();
    if (professionals.length > 0) {
      return professionals;
    }
    return "no se encuentran profesionales";
  } catch (error) {
    console.log(error);
  }
}

async function postProfessionals(name, image, info) {
  try {
    if (!name || !image || !info) return "se requieren campos";
    const profecional = {
      name: name,
      info: info,
      image: image,
    };

    const create = await Professional.create(profecional);
    return create;
  } catch (error) {
    console.log(error);
  }
}

async function updateProfessional(id, name, image, info) {
  const professionalUpdate = await Professional.findByPk(id);

  if (name) {
    professionalUpdate.name = name;
  }

  if (image) {
    professionalUpdate.image = image;
  }

  if (info) {
    professionalUpdate.info = info;
  }

  await professionalUpdate.save();

  return professionalUpdate;
}

async function deleteProfessional(id) {
  await Professional.destroy({ where: { id } });
  const allProfessional = await Professional.findAll();
  return allProfessional;
}

module.exports = {
  getProfessionals,
  postProfessionals,
  deleteProfessional,
  updateProfessional,
};
