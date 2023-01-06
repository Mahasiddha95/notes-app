/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const notesView = require('./src/notesView');
const notesModel = require('./src/notesModel');

describe('Notes view', () => {
  it('clicks the button and adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    const view = new notesView(model);
    model.addNote('first note');
    model.addNote('second note');

    const newNoteInputEl = document.querySelector('#new-note-input');
    newNoteInputEl.value = 'third note';

    const addNoteButtonEl = document.querySelector('#add-note-button');
    addNoteButtonEl.click()

    const displayedNotes = document.querySelectorAll('.note');


    expect(displayedNotes[2].innerText).toEqual('third note');
  });
});
