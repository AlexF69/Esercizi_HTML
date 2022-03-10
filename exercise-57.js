// # Async Management - Exercise 1 --> 57
// Implementare la funzione `fetchPersonById`, la quale riceve in input un id e restituisce una `Promise`
// contenente l'oggetto della persona corrispondente a quell'id.
//
const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  // risolvo la promise con codice di find array che da in risultato l'oggetto trovato per id
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let persona = persons.find((item) => item.id === id);
      resolve(persona);
    }, 1000);
  });
}

let personaTrovata = fetchPersonById(3);
personaTrovata.then((persona) => {
  console.log(persona);
  //console.log(`Persona trovata: ${persona}`); // non funziona, perchè?
});
