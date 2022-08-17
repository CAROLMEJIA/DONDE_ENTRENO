const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "professional",
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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
