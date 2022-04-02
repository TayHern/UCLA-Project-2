const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

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
      autoIncrement: true,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
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
