const notesModel = require("./notesModel.js");

beforeEach(() => {
  note = new notesModel();
});

describe('notesModel', () => {
  it('returns an empty array', () => {
    // TODO: write test
    expect(note.getNotes()).toEqual([]);
  });

  it('add a new note and returns it', () => {
    note.addNote('Buy milk');
    note.addNote('Have workout');
    expect(note.getNotes()).toEqual(['Buy milk', 'Have workout']);
  })

  it('add a new note and reset returning an empty array', () => {
    note.addNote('Buy milk');
    note.addNote('Have workout');
    note.reset();
    expect(note.getNotes()).toEqual([]);
  })
});


//   it('returns the temperature as 22', () => {
//     // TODO: write test
//     const thermostat = new Thermostat();
//     thermostat.up();
//     thermostat.up();
//     expect(thermostat.getTemperature()).toEqual(22);
//   });
//
//   it('returns the temperature as 22', () => {
//     // TODO: write test
//     const thermostat = new Thermostat();
//     thermostat.up();
//     thermostat.up();
//     thermostat.down();
//     expect(thermostat.getTemperature()).toEqual(21);
//   });
//
//   it('turns on the PSM', () => {
//     // TODO: write test
//     const thermostat = new Thermostat();
//     thermostat.up();
//     thermostat.up();
//     thermostat.up();
//     thermostat.up();
//     thermostat.up();
//     thermostat.up();
//     expect(thermostat.getTemperature()).toEqual(25);
//   });
//
//   it('turns off the PSM', () => {
//     // TODO: write test
//     const thermostat = new Thermostat();
//     thermostat.setPowerSavingMode(false);
//     for (let i = 0 ; i < 15 ; i++) {
//     thermostat.up();
//     }
//     expect(thermostat.getTemperature()).toEqual(32);
//   });
//
//   it('reset the temperature to 20', () => {
//     // TODO: write test
//     const thermostat = new Thermostat();
//     thermostat.up();
//     thermostat.up();
//     thermostat.down();
//     thermostat.reset();
//     expect(thermostat.getTemperature()).toEqual(20);
//   });
// });
