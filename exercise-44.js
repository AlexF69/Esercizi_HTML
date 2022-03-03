// # Destructuring assignment - Exercise 1 --> 44
// Utilizzare la destrutturazione, al posto di una variabile temporanea,
// per eseguire lo swapping delle variabili

let num1 = 10;
let num2 = 20;
console.log("Before swap: ", num1, num2); // Before swap: 10 20

// // Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;
//
// swapping per array
let arr = [num1, num2];
num1 = arr[1];
num2 = arr[0];

console.log("After swap: ", num1, num2); // After swap: 20 10
//
