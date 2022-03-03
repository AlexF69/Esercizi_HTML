// # Destructuring assignment - Exercise 3 --> 46
// Utilizzare la destrutturazione per semplificare il controllo sull'età della persona.

// function isAdult(person) {
//   return person.age >= 18;
// }
// passo solo elemento destrutturato da oggetto
function isAdult({ age }) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

console.log(isAdult(person)); // torna true
