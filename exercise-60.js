// # Async Management - Exercise 4 --> 60
// Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono
// restituire rispettivamente:
// * La persona che ha come identificativo l'id passato come parametro
// * Il tipo di lavoro che ha come identificativo l'id passato come parametro

// Infine implementare il codice necessario che si occupa di stampare in console la persona
// e il tipo di lavoro trovato.
// N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le
// `Promise` sono state risolte.

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

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];
// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);
      if (person) {
        return resolve(person);
      }
      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}
//
function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);

      if (job) {
        return resolve(job);
      }
      return reject(`Job with id: ${id} doesn't exist`);
    }, 2000);
  });
}

async function eseguo() {
  // async indica che questa è una funzione asincrona
  let persona = await fetchPersonById(2); // await per attendere la esecuzione della promise e andare avanti....
  let lavoro = await fetchJobById(1); // await per attendere la esecuzione della promise e andare avanti....
  // console.log(`Persona trovata ${persona}`); // Persona trovata [object Object] --> perchè non funziona?
  // console.log(`Lavoro trovato ${lavoro}`); // Lavoro trovato [object Object] --> perchè non funziona?
  console.log(persona);
  console.log(lavoro);
}
// eseguo la funzione async
eseguo();
