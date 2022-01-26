const students = ['Paul', 'George', 'Lucas'];
//console.log(students);
function addStudent(student) {
  // 2 metodi possiamo utilizzare per aggiungere: push in coda, unshift in testa
  students.push(student); // aggiunge in coda
  //students.unshift(student); // aggiunge in testa
}
// eseguo funzione 
addStudent('Marco');
console.log(students);
//Sai individuare il motivo per cui abbiamo la possibilità di aggiungere un elemento all'array nonostante abbiamo dichiarato la variabile come `readonly`?
//Penso che il motivo sia perchè se aggiungiamo un elemento all'array aggiungiamo una area di memoria nuova 