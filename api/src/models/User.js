const { DataTypes } = require("sequelize");
const { hashPassword } = require("../utils/hashing");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("password", hashPassword(value, this.mail));
        }
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      birthday: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
