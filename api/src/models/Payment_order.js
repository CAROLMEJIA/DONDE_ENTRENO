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
      payment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      code_stripe: {
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
