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

const addToblock = (data) => {
  return Block.create(data)
}


module.exports = {Block,addToblock}