// # Optional Chaining - Exercise 1 --> 27
// In questo esempio si sta cercando di eseguire il console.log di due proprietà non presenti all'interno
// dell'oggetto `person`, come posso sistemare il codice d'esempio così da non ricevere un errore in console?

const person = {
  firstName: "John",
  lastName: "Doe",
};

//console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
// diventa
console.log(person?.address?.city);
//
//console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined
// diventa
//console.log(person?.fullName()); // --> non funziona, da errore person.fullName is not a function
// if (person.fullName()) {
//   console.log(person.fullName());
// }
// --> non funziona, da errore person.fullName is not a function
