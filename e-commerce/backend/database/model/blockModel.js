const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Block = sequelize.define('block', {
  user_iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  tableName: 'block',
  timestamps: false
})

module.exports = {Block}