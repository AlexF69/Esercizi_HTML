// # Classes - Exercise 1 --> 34
// Definire la classe `Person` che accetta due parametri nel costruttore `firstName` e `lastName`

// Class definition
// i parametri del costruttore son i parametri della classe da pasare quando richiamo al classe con NEW
class Person {
  // proprietà
  nome = "";
  cognome = "";
  //Costruttore con i due parametri
  constructor(firstName, lastName) {
    this.nome = firstName;
    this.cognome = lastName;
  }
  //metodi get e set perle due proprietà
  get firstName() {
    return this.nome;
  }
  get lastName() {
    return this.cognome;
  }
  set firstName(value) {
    this.nome = value;
  }
  set lastName(value) {
    this.cognome = value;
  }
} // fine classe
// istanzio classe creando oggetto developer
const developer = new Person("Mario", "Rossi"); //istanzio classe creando oggetto developer
console.log(`Nome completo ${developer.firstName} ${developer.lastName}`);
