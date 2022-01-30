const { Model, DataTypes } = require('sequelize');
const sequelize = require('/config/connections.js');

class Workout extends Model {}

Workout.init(
    {
      workout_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      stroke_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout',
    }
  );
  
  module.exports = Workout;
  