// # Destructuring assignment - Exercise 2 --> 45
// Utilizzare la destrutturazione per eseguire l'assegnazione dei valori tramite un'unica linea di codice

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// destrutturazione per nome
let { id, firstName, lastName, age } = person;

console.log(id, firstName, lastName, age);
