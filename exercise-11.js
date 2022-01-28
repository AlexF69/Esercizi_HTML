// trasformazione di sintassi normale function in short come segue
//let myFunction = (a, b) // parametri della funzione,si omette la parola function
//=> // ritorna il risultato
//a * b; // operazioni che fa nella funzione fra parentesi graffe
/////
//# Arrow functions - Exercise 1
//Trasformare le due variabili funzione (`sum` e `log`) in due arrow functions
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
const log = (value) => {
  console.log(value);
};
// oppure
//log = value => console.log(value);
// richiama funzione
log(sum(2, 5));
