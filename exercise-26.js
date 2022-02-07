// # Object Constructor - Exercise 2 --> 26
// Implementare la funzione `Person` che accetta e assegna due argomenti: `firstName` e `lastName`
// e definisce il metodo `fullName()`, il quale si occupa di concatenare e restituire il nome completo.
// Infine, istanziare due oggetti: `john` e `simon` tramite la keyword `new` utilizzando la funzione `Person` e
// stampare in console il nome completo

// per sbaglio l'ho già svolto in questa maniera l'esercizio 25 precedente
function Person(nome, cognome) {
  this.firstName = nome;
  this.lastName = cognome;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

let john = new Person("John", "Doe");
let simon = new Person("Simon", "Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
