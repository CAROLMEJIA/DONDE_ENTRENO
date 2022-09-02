const { Membership } = require("../../db/db.js");

async function createMembership(type, price, description) {
  const create = await Membership.create({ type, price, description });
  return create;
}

async function allMembership() {
  const all = await Membership.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
  });
  return all;
}

async function deleteMembership(id) {
  await Membership.destroy({ where: { id } });
  return "Membresia eliminada correctamente";
}

async function updateMembership(id, type, price, description) {
  const memberUpdate = await Membership.findByPk(id);
  if (type) {
    memberUpdate.type = type;
  }
  if (price) {
    memberUpdate.price = price;
  }
  if (description) {
    memberUpdate.description = description;
  }
  await memberUpdate.save();
  return memberUpdate;
}

module.exports = {
  createMembership,
  allMembership,
  deleteMembership,
  updateMembership,
};
