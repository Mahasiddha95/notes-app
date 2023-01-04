const notesModel = require('./notesModel');

console.log('The notes app is running');
const model = new notesModel();

model.addNote('note');
console.log(model.getNotes());
