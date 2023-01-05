/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const notesView = require('./notesView');
const notesModel = require('./notesModel');

describe('Notes view', () => {
  it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    const view = new notesView(model);
    model.addNote('first note');
    model.addNote('second note');

    view.displayNotes

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
