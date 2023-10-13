const db = require('./db/connection');
const inquirer = require('inquirer');
const Note = require('./models/Note');
require('console.table');

async function getAllNotes() {
  const notes = await Note.findAll({
    raw: true,
    attributes: ['id', 'text']
  });

  console.table(notes)
}

async function createNote() {
  const { text } = await inquirer.prompt({
    name: 'text',
    message: 'Please enter your note text'
  });

  await Note.create({ text });

  console.log('Note added successfully!');
}

async function showMainMenu() {
  const { option } = await inquirer.prompt({
    name: 'option',
    message: 'Please select a menu option.',
    type: 'list',
    choices: ['View All Notes', 'Create Note']
  });

  switch (option) {
    case 'View All Notes':
      await getAllNotes();
      showMainMenu();
      break;
    case 'Create Note':
      await createNote();
      showMainMenu();
  }
}

db.sync()
  .then(showMainMenu);
