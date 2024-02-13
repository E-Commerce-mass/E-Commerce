
const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const User = sequelize.define('user', {
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  emailPhone: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  adresse: DataTypes.STRING,
  role: DataTypes.STRING,
  image: DataTypes.STRING,
}, {
  tableName: 'user',
  timestamps: false
})

module.exports = {User}