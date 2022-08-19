require("dotenv").config();
const { SECRET } = process.env;
const { createHash } = require("crypto");

const hashPassword = (password, mail) => {
  return createHash("sha256")
    .update(password + mail + SECRET)
    .digest("hex");
};

module.exports = {
  hashPassword,
};
