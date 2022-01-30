// # Closure - Exercise 1
// Implementare la funzione `greet` che accetta come argomento un saluto (`greeting`)
// e restituisce una closure che si occupa di concatenare il saluto passato come parametro
// con il nome della persona da salutare

// Esempio:
// ```
// const greetWithHello = greet('Hello'); // Hello
// const greetWithBye = greet('Bye'); // Bye
// const greetWithHi = greet('Hi'); // Hi

// const greetPaulWithHello = greetWithHello('Paul'); // Hello, Paul
// const greetPaulWithHi = greetWithHi('Paul'); // Hi, Paul
// const greetJohnWithBye = greetWithBye('John'); // Bye, John
// const greetSimonWithHello = greetWithHello('Simon'); // Hello, Simon
// ```

function greet(greeting) {
  // dichiarativa inner function
  return function (nome) {
    return `${greeting} ${nome}`;
  };
}
// esecuzione outer che restituisce clouser a seconda del saluto
const greetWithHello = greet("Hello");
const greetWithBye = greet("Bye");
const greetWithHi = greet("Hi");

const greetPaulWithHello = greetWithHello("Paul");
const greetPaulWithHi = greetWithHi("Paul");
const greetJohnWithBye = greetWithBye("John");
const greetSimonWithHello = greetWithHello("Simon");

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);
