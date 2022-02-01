// # Closure - Exercise 4 --> 17
// Implementare la funzione `calculate` che restituisce un oggetto che dia la possibilità
// di eseguire le quattro operazioni matematiche (somma, sottrazione, moltiplicazione e divisione)
// su uno stesso numero e infine consente di stamparne il risultato.

// **TIP**: Per concatenare i metodi basta restituire il riferimento all'oggetto
//stesso (`$this`) (per ogni funzione)

// Esempio:
// ```
// calculator
//   .add(2) // 2
//   .add(4) // 6
//   .multiply(3) // 18
//   .sub(1) // 17
//   .sub(3) // 14
//   .divide(2) // 7
//   .printResult();
// ```

function calculate() {
  // ...
  let risultato = 0;

  add = function (num) {
    risultato += num; // al posto di : risultato = risultato + num;
    return this;
  };
  multiply = function (num) {
    risultato *= num;
    return this;
  };
  sub = function (num) {
    risultato -= num;
    return this;
  };
  divide = function (num) {
    risultato /= num;
    return this;
  };
  printResult = function () {
    //return `${risultato}`;
    console.log(risultato);
  };
  return this;
}

//

const calculator = calculate(); // funzione padre ch restituisce il risultato della funzione padre
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
// funzione figlia contenuta in calculate
