// # Object Methods - Exercise 1 --> 23
// Utilizzando l'oggetto `person` stampare in console i suoi valori nel seguente modo
// utilizzando il metodo `Object.keys`:

// ```
// firstName: Mario
// lastName: Rossi
// age: 25
// ```

const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
//console.log(Object.keys(person)); // stampa le kiavi
console.log(Object.values(person)); // stampa i valori
// console.log(Object.entries(person));
