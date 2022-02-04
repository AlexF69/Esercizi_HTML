// # Object Copying - Exercise 3--> 21
// In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla
// alla variabile `person2`, tuttavia utilizzando il metodo `Object.assign()` e
// modificando la proprietà `address`, questa viene modificata anche per
// l'oggetto `person1`. Come posso eseguire un "deep copying" dell'oggetto `person1`?
// era
// const person1 = {
//   firstName: "John", // copiati in deep copy
//   lastName: "Doe",
//   age: 25,
//   address: {
//     // oggetto nell'oggetto che viene copiato per relazione
//     state: "Italy",
//     region: "Lazio",
//     city: "Rome",
//   },
// };
//
// dichiarazione oggetto per deep copy tramite Costruttore ver 1
//
// function Person1() {
//   this.firstName = "John";
//   this.lastName = "Doe";
//   this.age = 25;
//   this.address = {
//     // dichiarazione proprietà = oggetto
//     state: "Italy",
//     region: "Lazio",
//     city: "Rome",
//   };
// };
// dichiarazione oggetto per deep copy tramite Costruttore ver 2
function Person1(firstName, lastName, age, stato, regione, citta) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = {
    // dichiarazione proprietà dell'oggetto
    state: stato,
    region: regione,
    city: citta,
  };
}

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
// tolgo
//const person2 = Object.assign({}, person1); // creo un vuoto copia di person1

// ver 1 con inizializzazione
// const person1 = new Person1();
// const person2 = new Person1();

// person2.address.region = "Lombardia";
// person2.address.city = "Milan";
// ver 2 con parametri
const person1 = new Person1("John", "Doe", 25, "Italy", "Lazio", "Rome");
const person2 = new Person1("John", "Doe", 25, "Italy", "Lombardia", "Milan");

console.log(person1);
console.log(person2);
