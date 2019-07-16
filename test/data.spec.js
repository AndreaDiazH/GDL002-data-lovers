require('../src/data.js');
const INJURIES= require('../src/data/injuries/injuries.json');

describe('injuries', () => {
  it('should be an object', () => {
    expect(typeof INJURIES).toBe('object');
  });
  });

describe('function yearAccident', () => {
  it('should return yearAccident 1960', () => {
    expect(window.datalover.yearAccident(INJURIES)[0]).toEqual({"Automovil": "sin datos", "Bicicleta": "sin datos", "Motocicleta": "sin datos", "Year": "1960"});
  });
  });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// }); 
