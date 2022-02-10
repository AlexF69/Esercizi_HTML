// # Array Methods - Exercise 4 --> 32
// Implementare la funzione `uncompletedNotes` che, dato un array di note,
// restituisce soltanto le note non completate. Una nota viene considerata completata
// se **tutti** i todo presenti hanno il flag `done` impostato a `true`.
//
function uncompletedNotes(notes) {
  return notes.filter(function (ele) {
    return ele.todos.find((item) => item.done == false);
  });
}

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
