const notesModel = require('./notesModel');

console.log('The notes app is running');
const model = new notesModel();

model.addNote('note');
console.log(model.getNotes());

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

model.addNote('This is an example note');

const view = new NotesView(model)
view.displayNotes();
