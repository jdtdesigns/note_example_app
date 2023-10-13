const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');

class Note extends Model { }

Note.init({
  text: {
    type: DataTypes.STRING
  }
}, {
  modelName: 'note',
  sequelize: db
});

module.exports = Note;

