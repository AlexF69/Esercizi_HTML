// # Array Methods - Exercise 2 --> 30
// Implementare la funzione `nicknameMap` che, dato un array di persone,
// crea un array di nickname. Il nickname deve essere formato in questa modo: `<name>-<age>`.

// Esempio:
// ```
// { name: 'Paul', age: 21 } => Paul-21
// ```

function nicknameMap(pippo) {
  // return pippo.map((item) => item.name + "-" + item.age); // short
  return pippo.map((item) => (item = `${item.name}-${item.age}`));
  // crea nuovo array con elemento item = la unione dei due name e age
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);

// MAP è un metodo che serve per lavorare con il contenuto dell'array di origine e riportarlo su nuovo array,
// lasciando immutato l'array di origine
// let arr2searchMapped = heroes.map((item) => {
//   item += ' Sr.';
//   return item;
// }); // aggiunge la stringa Sr. ai valori dell'array heroes in un nuovo array arr2searchMapped
