// # Classes - Exercise 7 --> 40
// Definire la classe `Person` che accetta tre parametri nel costruttore: `firstName`, `lastName` e `age`
// e definisce per ciascuna di queste tre proprietà i rispettivi metodi getters e setters. Definire inoltre
// anche il metodo getter `fullName` che si occupa di restituire le proprietà nome e cognome concatenate.

class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName; // qui faccio riferimento alla proprietà privata
    this.lastName = lastName; // qui invece utilizzo il metodo SET
    this.#age = age;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get age() {
    return this.#age;
  }
  // metodo di full name
  get fullName() {
    // utilizzo indifferentemente il riferimento alla proprità privata e il metodo GET
    return `${this.#firstName} ${this.lastName}`;
  }
  /////
  set firstName(value) {
    this.#firstName = value;
  }
  set lastName(value) {
    this.#lastName = value;
  }
  set age(value) {
    this.#age = value;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria"; // richiamo del GET
person.lastName = "Verdi"; // richiamo del GET
console.log(person.fullName); // richiamo del GET
