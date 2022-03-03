// # Destructuring assignment - Exercise 4 --> 47
// Utilizzare la destrutturazione per stampare la lista dei valori delle proprietà presenti in `person`:

// ```
// id: 1
// firstName: Mario
// lastName: Rossi
// age: 25
// ```
//
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// for (let item of Object.entries(person)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }
// destrutturazione della key e del value dell'oggetto su un array di coppie key+value
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
