const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Image = sequelize.define('images', {
    idimage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: DataTypes.STRING
}, {
    tableName: 'images',
    timestamps: false     
})

const addImage = (data) => {
    return Image.create(data)
}
const getAllIm=(id)=>{
    return Image.findAll({where: {productIdproducts:id}})
  }

module.exports = {Image, addImage,getAllIm}