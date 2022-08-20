const { Admin } = require("../../db/db.js");

async function createAdmin(name, mail, password) {
  const newAdmin = {
    name: name,
    mail: mail,
    password: password,
  };

  return await Admin.create(newAdmin);
}

module.exports = {
  createAdmin,
};
