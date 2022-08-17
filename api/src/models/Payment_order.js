const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "payment_order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },      
      method: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      invoice: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
