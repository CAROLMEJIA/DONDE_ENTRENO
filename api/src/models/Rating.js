const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "rating",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
          },
        allowNull: false,
      },      
      comment: {
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
