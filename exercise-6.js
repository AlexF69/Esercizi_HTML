// Implementare, tramite blocchi condizionali e cicli, la funzione `adultFilter`, la quale, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni
function adultFilter(persons) {
  let risultato = []; // array di appoggio per i maggiorenni  e di ritorno
  for (let counter = 0; counter < persons.length; counter++) {
    if (persons[counter].age > 17) {
      risultato.push(persons[counter]);
    }
  }
  return risultato;
}

// array persons con 10 elementi
const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
