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
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://res.cloudinary.com/dwfwppodd/image/upload/v1662041193/HenryFitnes/vkiwlwhrwha8ofqbplnn.png",
      }
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
