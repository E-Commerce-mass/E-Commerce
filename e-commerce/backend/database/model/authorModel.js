const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Authorization = sequelize.define('authorization', {
  idauthorization: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  tableName: 'authorization',
  timestamps: false
})

module.exports = {Authorization}