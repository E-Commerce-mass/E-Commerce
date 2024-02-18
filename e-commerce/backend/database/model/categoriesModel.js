const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Categories = sequelize.define('categories', {
  idcategories: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryname: DataTypes.STRING
}, {
  tableName: 'categories',
  timestamps: false
})


module.exports = {Categories}