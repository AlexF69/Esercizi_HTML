//# Arrow functions - Exercise 2
//Trasformare la variabile funzione `concat` in una arrow function
//const concat = function (arr1, arr2) {
//  return arr1.concat(arr2);
//};
// diventa
const concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
// specifico return perchè la funzione non prevede solo return ma richama se stessa

console.log(concat([2, 4], [5, 1]));
