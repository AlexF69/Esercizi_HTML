let personName='Paul'; // dichiarativa fuori dal blocco

function canPlay() {
  if (true) {
    let personName = 'Paul';
  }

  personName += ' plays football'; // Argh! personName is not defined, perchè dicharata all'interno di una function è valida solo nel blocco, non fuori

  console.log(personName);
}

canPlay();