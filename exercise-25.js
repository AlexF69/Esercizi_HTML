// # Object Constructor - Exercise 1
// Creare l'oggetto `person` e definire al suo interno i metodi getters / setters
// per le proprietà: `firstName` e `lastName`. Definire all'interno dell'oggetto
// anche il metodo `fullName()` che si occupa di concatenare e restituire il nome e
// il cognome della persona. Infine, costruire due oggetti: `john` e `simon`,
// assegnare ad entrambi il valore di `firstName` e `lastName` e stampare in console
// il nome completo

//const person = { // mi creo direttamente il costruttore person al posto dell'oggetto person
function Person(nome, cognome) {
  //getters() {
  this.getters = nome;
  //};
  //setters() {
  this.setters = cognome;
  //};
  this.fullName = function () {
    return `${this.getters} ${this.setters}`;
  };
}

const john = new Person("John", "Doe");
const simon = new Person("Simon", "Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins

//////////////

// ALT096 per la ``
