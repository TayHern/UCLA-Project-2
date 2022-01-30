const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Session extends Model {}

Session.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'session',
    }
  );
  
  module.exports = Session;
  