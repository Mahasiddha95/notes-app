class notesModel {
  constructor() {
    this.note = [];
  }

  getNotes() {
    return this.note
  }

  addNote(string){
    this.note.push(string);
  }

  reset(){
    return this.note = []; 
  }

}

module.exports = notesModel;
