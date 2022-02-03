// # Object Copying - Exercise 1 --> 19
// In questo esercizio sono stati creati due oggeti: `person1` e `person2`.
// All'oggetto `person2` è stato assegnato l'oggetto `person1`.
// Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2`
// in "Simon".

// Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche
//l'oggetto `person1`?
//

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche
// l'oggetto `person1`?
//
// Perchè gli oggetti vengono assegnati per riferimento,
// quindi l'area di memoria/allocazione di memoria è la stessa
// dell'oggetto copiato e dell'originale. Se vogliamo tenere distinti i due oggetti
// si può usare il metodo di clonazione Object.assign che crea un oggetto vuoto
// in riferimento alla sola struttura di un altro oggetto
