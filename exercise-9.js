//# Conditionals & Loops - Exercise 6 -->9
//Implementare, tramite blocchi condizionali e cicli, la funzione `getKeys`, la quale,
//dato in input un qualsiasi oggetto, restituisce la lista delle chiavi presenti al suo interno
function getKeys(obj) {
  const listProp = [];
  // metodo 'in' per leggere le proprietà di un oggetto sulla variabile prop
  for (let prop in obj) {
    // console.log(prop, obj[prop]); // mostra anche il valore obj[prop]
    // console.log(prop); // mostra solo kiave
    listProp.push(prop);
  }
  //
  return listProp;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
