const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "classpass",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
        
      },         
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },      
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      day: {
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
