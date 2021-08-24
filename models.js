const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite', // dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
  storage: './db.sqlite',
  logging: false
});

const User = sequelize.define('User', {
  name: Sequelize.DataTypes.STRING // varchar 255
});

module.exports = {Sequelize, sequelize, User};