// # Closure - Exercise 2 -->15
// Implementare la funzione `pow` che accetta come argomento la base (`base`)
// e restituisce una closure che si occupa di elevare a potenza la base
// per l'esponente passato come parametro
//
function pow(base) {
  // uso la funzione Math.pow per calcolare la potenza all'interno della inner function
  return function (esp) {
    return (risultato = Math.pow(base, esp));
  };
}
// closure della base 2
const pow2 = pow(2);
// closure della base 5
const pow5 = pow(5);

console.log("--- Power of 2 ---");
console.log(pow2(4)); // elevazione a potenza 4 della base 2
console.log(pow2(2)); // elevazione a potenza 2 della base 2
console.log(pow2(8)); // elevazione a potenza 8 della base 2

console.log("--- Power of 5 ---");
console.log(pow5(4)); // elevazione a potenza 4 della base 5
console.log(pow5(2)); // elevazione a potenza 2 della base 5
console.log(pow5(8)); // elevazione a potenza 8 della base 5
