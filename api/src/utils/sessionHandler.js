require("dotenv").config();
const { SECRET } = process.env;
const { createHash } = require("crypto");

function  verifyToken () {
  return createHash("sha256")
    .update(password + mail + SECRET)
    .digest("hex");
};

module.exports = {
    verifyToken,
};
