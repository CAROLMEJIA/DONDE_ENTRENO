const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "gym",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
