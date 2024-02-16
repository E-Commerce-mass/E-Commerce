const { Sequelize } = require('sequelize')
require('mysql2')


const connection = new Sequelize('e-commerce', 'root', '1234', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate()
.then(()=>{
    console.log('connection done');
})
.catch((err)=>{
    console.log(err);
})

module.exports = connection