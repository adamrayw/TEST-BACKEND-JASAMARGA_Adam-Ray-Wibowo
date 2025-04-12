const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
let password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

password = String(password)

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false, // Disable logging; default: console.log
});

module.exports = db;