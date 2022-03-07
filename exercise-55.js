// # Rest parameters and spread syntax - Exercise 3 --> 55
// Come mergiare il valore di `newNumber` all'interno di `numberStore`
// senza utilizzare il metodo `push`?

let numberStore = [0, 1, 2];
let newNumber = 3;
//numberStore.push(newNumber);
numberStore = [...numberStore, 3];
console.log(numberStore);
