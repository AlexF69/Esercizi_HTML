// # Array Methods - Exercise 4 --> 32
// Implementare la funzione `uncompletedNotes` che, dato un array di note,
// restituisce soltanto le note non completate. Una nota viene considerata completata
// se **tutti** i todo presenti hanno il flag `done` impostato a `true`.

function uncompletedNotes(notes) {
  // ...
  let arrNoteWip = []; // cicla array con i
  for (let i = 0; i < notes.length; i++) {
    // loop su oggetto todos con LET IN per cercare proprietà todos.done nell'elemento arrray di turno in i
    for (let propDone in notes[i].todos) {
      // test todos.done se falso push array
      let todosDone = notes[i].todos[propDone].done;
      // if (todosDone == false) {
      if (!todosDone) {
        arrNoteWip.push(notes[i]); // done=false e fai push su nuovo array
        break; // esce dal blocco
      } // fine if trovata done falsa
    } // fine for oggetto Todos
  } // fine for loop notes
  return arrNoteWip;
} // fine function

///////////////// array annidato
const notes = [
  // nota id 1: Workout program
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  // nota id 2: Front-end Roadmap
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: true,
      },
    ],
  },
];

//
const notesInProgress = uncompletedNotes(notes);
console.log("All notes: ", notes);
console.log("Notes In Progress: ", notesInProgress);
