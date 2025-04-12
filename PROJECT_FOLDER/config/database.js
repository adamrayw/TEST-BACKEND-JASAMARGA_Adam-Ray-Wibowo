const { Sequelize } = require('sequelize');

const db = new Sequelize('data_kepegawaian', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres', 
})

module.exports = db;