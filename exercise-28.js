// # Optional Chaining - Exercise 2 --> 28
// In questo esempio si sta cercando di controllare se è stato specificato un valore
// per la proprietà `city`, tuttavia il codice si presenta in maniera poco leggibile.
// Come si può migliorare e semplificare il codice d'esempio?

const order = {};

if (
  // order &&
  // order.customer &&
  // order.customer.address &&
  !order?.customer?.address?.city
) {
  console.log("City is required");
}
