const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define(
    "membership",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },      
      description: {
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
