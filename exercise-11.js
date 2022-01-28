//# Arrow functions - Exercise 1
//Trasformare le due variabili funzione (`sum` e `log`) in due arrow functions
// trasformazione di sintassi normale function in short come segue
//const sum = function (a, b) {
//  return a + b;
//};
// diventa
//const sum = (a, b) => { return a + b;};
// o anche abbreviato perchè solo un return
sum = (a, b) => a + b;
//const log = function (value) {
//  console.log(value);
//};
// diventa
//const log = (value) => {
//  console.log(value);
//};
// oppure ancora più breve
const log = (value) => console.log(value);
// richiamo funzione
log(sum(2, 5));
