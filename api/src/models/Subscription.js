const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define(
    "subscription",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      start_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      }, 
      end_date: {
        type: DataTypes.DATEONLY,
        //allowNull: false,
      },     
      renovation: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },      
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }      
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
