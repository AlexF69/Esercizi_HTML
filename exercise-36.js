// # Classes - Exercise 3 -->36
// Definire all'interno della classe `Person` un metodo statico che, dato in input
// un object literal, istanzia un oggetto `Person`.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(ogg) {
    this.firstName = ogg.firstName;
    this.lastName = ogg.lastName;
    return ogg;
  }
}
// fine class
const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);

console.log(`${person.firstName} ${person.lastName}`);
