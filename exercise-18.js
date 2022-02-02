// # Closure - Exercise 5 --> 18
// Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale,
// restituisce una closure che accetta come argomento un numero su cui eseguire la funzione
// per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile `cache`,
// se è presente restituisce immediatamente il risultato memorizzato precedentemente,
// altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno
// della variabile `cache`, così da servire il risultato cachato precedentemente qualora
// venga richiesto il fattoriale per lo stesso numero.

// Esempio:
// ```
// factorial = memoize(factorial);
// console.log(factorial(10)); // Calculating result for 3628800
// console.log(factorial(6)); // Fetching from cache for 720
// console.log(factorial(5)); // Fetching from cache for 120
// ```

function memoize(fn) {
  let cache = {}; // oggetto che contiene proprietà
  cache.storage = []; // proprietà storage dichiarata come un array di due dimensioni:
  // num_array e risultato_array, inizializzate in seguito
  // ritorno funzione passata in parametro fn passando parametro num di cui fare fattoriale
  return function (num) {
    // prima di tutto cerco se fattoriale di num già calcolato sulla proprietà storage (array) dell'oggetto cache
    const result = cache.storage.find((item) => item.num_array === num); // condizione uguaglianza
    // dove item ritorna tutto l'elemento di storage composto da num_array e risultato_array
    if (result) return result.risultato_array; // se è vero che result è valorizzato/trovato, lo ritorna e esce
    // esle non serve perchè esce prima, altrimenti lo calcola con la funzione
    let risultato = fn(num);
    // e lo storicizza in array storage, sia num che risultato
    cache.storage.push({ num_array: num, risultato_array: risultato });
    return risultato; // ritorna risultato della funzione e esce
  };
}

// funzione fattoriale dichiarata fuori dalla outer function
function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}
//
factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
