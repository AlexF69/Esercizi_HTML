// # Error handling - Exercise 1 --> 41
// Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
// Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
// Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un `amount`
// superiore rispetto al totale presente sul conto corrente.

class BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    this.#amount = initialAmount;
  }
  //
  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount < 0) {
        throw new Error("il deposito è un importo negativo"); // eseguo mesaggio errore e non prosegue
      }
      this.#amount += amount;
    } catch (err) {
      console.log(err);
      //console.log("messaggio errore", err.messagge);
      // console.log("stack trace errore", err.stack);
      //console.log(`il deposito è negativo ${amount}`);
    }
  }
  //
  withdraw(amount) {
    // prelievo: errore se negativo e se maggiore del presente amount
    try {
      if (amount > this.#amount) {
        // console.log(`passa per il prelievo è maggiore del depositato`);
        throw new Error("prelievo negativo rispetto al totale depositato"); // eseguo messaggio errore e non prosegue
      }
      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      this.#amount -= amount;
    } catch (err) {
      console.log(err);
      // console.log("prelievo messaggio errore", err.messagge);
      // console.log(
      //   `il prelievo è negativo - Il credito è di ${
      //     this.#amount
      //   } e stai prelevando ${amount}`
      // );
    }
  }
  //
  view() {
    console.log("Ammontare da function view", this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
//bankAccount.deposit(-500); // da togliere
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
