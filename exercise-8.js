//# Conditionals & Loops - Exercise 5 --> 8
//Implementare, tramite blocchi condizionali e cicli, la funzione `calculateAverageAge`,
//la quale, dato un array di persone, calcola l'età media
function calculateAverageAge(persons) {
  // loop per sommare age in var di appoggio e poi fare media
  let somma = 0;
  for (let counter = 0; counter < persons.length; counter++) {
    somma = somma + persons[counter].age;
  }
  //console.log(somma);
  //console.log(persons.length);
  let avg = somma / persons.length;
  return avg;
}

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

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);
console.log(`AVG = ${averageAge}`); // aggiunta print con label
