// # JSON methods - Exercise 1 --> 49
// Implementare il codice necessario per convertire l'oggetto `developer` in un json.
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
// crea istanza da classe
const developer = new Person(1, "Mario", "Rossi", 25);
// crea altra var in json
let jsonDeveloper = JSON.stringify(developer);
// Print developer as json object
console.log(jsonDeveloper);
