const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const moment = require('moment');

class Session extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Session.init(
  {
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'workout',
        key: 'id'
      }
      },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: moment().format('MM/DD/YYYY')
      },
  },
  {
    hooks: {
      async beforeCreate(newSessionData) {
        newUserData.password = await bcrypt.hash(newSessionData.password, 10);
        return newSessionData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'session',
  }
);

module.exports = Session;
