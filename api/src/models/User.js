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
        set(value){
            this.setDataValue("password", hashPassword(value, this.mail));
        }
    },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
