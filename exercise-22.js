// # Object References - Exercise 1 --> 22
// Creare all'interno dell'oggetto `person` i metodi: `fullName()` e `info()`,
// i quali utilizzano le proprietà dell'oggetto per stampare rispettivamente
// il nome completo e le informazioni anagrafiche comprensive di posizione lavorativa

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  job: "Web Developer",
  //  forma classica per dichiarare function
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  // forma short per dichiarare function
  info() {
    return `${this.firstName} ${this.lastName},  ${this.age} - ${this.job}`;
  },
};

console.log(person.fullName()); // John Doe - richiamo funzione 1
console.log(person.info()); // John Doe, 25 - Web Developer - richiamo funzione 2
