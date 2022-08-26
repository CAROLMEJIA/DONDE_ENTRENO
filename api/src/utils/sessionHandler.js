require("dotenv").config();
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");

function makeToken(id, mail, admin) {
  const token = jwt.sign(
    {
      id: id,
      mail: mail,
      admin: admin,
    },
    SECRET
  );
  return `Bearer ${token}`;
}

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    jwt.verify(bearerToken, SECRET, (error, authData) => {
      if (error) {
        res.status(403).send("No token");
      } else {
        next();
      }
    });
  } else {
    res.status(403).send("No token");
  }
}

function verifyAdmin(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    jwt.verify(bearerToken, SECRET, (error, authData) => {
      if (error) {
        res.status(403).send("No token");
      } else {
        if (!authData.admin) {
          next();
        } else {
          res.status(403).send("No admin no go");
        }
      }
    });
  } else {
    res.status(403).send("No token");
  }
}

module.exports = {
  makeToken,
  verifyToken,
  verifyAdmin,
};
