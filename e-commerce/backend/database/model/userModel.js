
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

const getOneUser = (email) => {
  return User.findOne({where: {emailPhone: email}})
}

const addUser = (data) => {
  return User.create(data)
}

const editUser = (id, data) => {
  return User.update(data, {where: {iduser: id}})
}

const deleteUser = (id) => {
  return User.destroy({where: {iduser: id}})
}

module.exports = {User, getOneUser, addUser, editUser, deleteUser}