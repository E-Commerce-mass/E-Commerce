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

module.exports = {Image}