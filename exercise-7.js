// ESE 7 Implementare, tramite blocchi condizionali e cicli, la funzione nicknameMap, la quale, dato un array
// di persone, crea un array di nickname. Il nickname deve essere formato nel seguente modo: <name>-<age>
function nicknameMap(persons) {
  const newNickname = [];
  for (let counter = 0; counter < persons.length; counter++) {
    newNickname.push(persons[counter].name + "-" + persons[counter].age);
    // altra soluzione convariabile di appoggio
    //let elNewNickname = persons[counter].name + "-" + persons[counter].age;
    //newNickname.push(elNewNickname);
    //console.log(elNewNickname);
  }
  return newNickname;
}
//
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

const nicknames = nicknameMap(persons);
console.log("PERSONS");
console.log(persons);
console.log("NICKNAME");
console.log(nicknames);
