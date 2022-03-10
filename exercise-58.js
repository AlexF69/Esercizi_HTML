// # Async Management - Exercise 2 --> 58
// Migliorare la funzione `fetchPersonById`, in modo tale che la `Promise` venga rigettata qualora non
// esiste una persona con l'id passato come parametro.

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
// era
// function fetchPersonById(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(persons.find((item) => item.id === id)), 1000);
//   });
// }

function fetchPersonById(id) {
  // risolvo la promise con codice di find array che da in risultato l'oggetto trovato per id
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let persona = persons.find((item) => item.id === id);
      if (persona) {
        resolve(persona);
      } else {
        reject(new Error("Errore da reject"));
      }
    }, 1000);
  });
}
// era
//fetchPersonById(2).then((person) => console.log(person));
//
fetchPersonById(5)
  .then((person) => console.log(person))
  .catch((err) => {
    // intercetta il precedente errore e lo mostra in console.log
    console.log("è stato provocato l'errore: ", err);
  });
