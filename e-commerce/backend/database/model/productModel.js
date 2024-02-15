const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../index');
const { Image } = require('./imagesModel');

const Products = sequelize.define('products', {
  idproducts: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: DataTypes.STRING,
  price: DataTypes.DOUBLE,
  color: DataTypes.STRING,
  size: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  promotion: DataTypes.STRING,
  description: DataTypes.STRING,
  new: DataTypes.BOOLEAN
}, {
  tableName: 'products',
  timestamps: false
})
const getAllproducts = () => {
  return Products.findAll({include: [{model: Image, attributes: ["image"]}]})
}

module.exports = {Products,getAllproducts}