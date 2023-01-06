// class View {
//   constructor() {
//     this.mainContainerEl = document.querySelector('#main-container');
//
//     console.log(this.mainContainerEl);
//   }
//
//   addParagraph() {
//     const p = document.createElement('p');
//     p.innerText = 'This paragraph has been dynamically addded by JavaScript! (or something else)';
//     this.mainContainerEl.append(p);
//   }
// };
//
// module.exports = View;

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');

    const addNoteButtonEl = document.querySelector('#add-note-button');
    addNoteButtonEl.addEventListener('click', this.handleAddNoteButtonClick.bind(this));
  }

  handleAddNoteButtonClick(){
    // Get the value of the new note input
    const newNoteInputEl = document.querySelector('#new-note-input');
    const newNoteText = newNoteInputEl.value;
    // Add the new note to the model
    this.model.addNote(newNoteText)
    // Display the updated list of notes on the page
    this.displayNotes();
  }

  displayNotes(){
    const notes = this.model.getNotes()

    // For each note, create and append a new element on the main container

      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      })
  }
}


module.exports = NotesView;
