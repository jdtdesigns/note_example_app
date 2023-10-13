const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'inquirer_example_db',
  'root',
  '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;