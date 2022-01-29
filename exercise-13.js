// # Arrow functions - Exercise 3 -- 13
//Trasforma le variabili funzione in arrow functions e concatenale in modo tale che venga
//stampato sulla console la seguente operazione matematica:
// `((2 + 4) * (5 + 2) - 2) / 5`

//const sum = function (a, b) {
//   return a + b;
// }; diventa
//const sum = (a, b) => a + b;
const sum = (a, b) => `${a} + ${b}`;

// const subtract = function (a, b) {
//   return a - b;
// }; diventa
//const subtract = (a, b) => a - b;
const subtract = (a, b) => `${a} - ${b}`;
//
//const multiply = function (a, b) {
//  return a * b;
// }; diventa
//const multiply = (a, b) => a * b;
const multiply = (a, b) => `${a} * ${b}`;

// const divide = function (a, b) {
//   return a / b;
// }; diventa
//const divide = (a, b) => a / b;
const divide = (a, b) => `${a} / ${b}`;
//
// concatenazione
// `((2 + 4) * (5 + 2) - 2) / 5`
const value = divide(
  subtract(
    multiply(sum(2, 4), sum(5, 2)), // fine primo parametro della subtract
    2
  ), // secondo parametro della subtract // fine primo parametro della divide
  5
); // secondo parametro della divide
console.log(value);
// const log = function (value) {
//   console.log(value);
// };
// diventa
const log = (value) => console.log(value);
