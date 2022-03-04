// # JSON methods - Exercise 4 --> 52
// In questo esercizio occorre filtrare le proprietà dell'oggetto `person`
// affinché vengono codificate in json solo i valori numerici (vale a dire `id` e `age`).

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
//
// const json = JSON.stringify(person);
const json = JSON.stringify(person, ["id", "age"]);

console.log(json); // Should return: { id: 1, age: 25 }
