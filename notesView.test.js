/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const notesView = require('./src/notesView');
 const notesModel = require('./src/notesModel');

 describe('Notes view', () => {
   it('adds a new note when the button is clicked', () => {
     // Set the innerHTML of the body to the contents of the index.html file
     document.body.innerHTML = fs.readFileSync('./index.html');

     const model = new notesModel();
     const view = new notesView(model);
     model.addNote('first note');
     model.addNote('second note');

     // Set the value of the new note input
     const newNoteInputEl = document.querySelector('#new-note-input');
     newNoteInputEl.value = 'third note';

     // Simulate a click on the add note button
     const addNoteButtonEl = document.querySelector('#add-note-button');
     addNoteButtonEl.click();

     // Get the list of notes displayed on the page
     const displayedNotes = document.querySelectorAll('.note');

     // Check that the third note was added to the list
     expect(displayedNotes[2].innerText).toEqual('third note');
   });

  it('displays the right number of notes when called twice', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    const notesList = document.querySelectorAll('div.note');
    expect(notesList.length).toEqual(2);
  });
});
