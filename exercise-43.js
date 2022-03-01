// # Error handling - Exercise 3 --> 43
// Sostituire il lancio delle eccezioni con due classi custom che estendono dalla classe `Error`:
//
// * `NegativeAmountError`: classe custom qualora viene fornito un importo negativo
// * `WithdrawNotPermittedError`: classe custom qualora si cerca di ritirare dal proprio
//                                conto corrente un importo maggiore rispetto al totale consentito
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      // throw new Error("The amount provided cannot be negative"); // Use custom Error class NegativeAmountError
      throw new NegativeAmountError(
        "The amount provided cannot be negative - L'importo depositato non può essere negativo"
      );
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      // throw new Error("The amount provided cannot be negative"); // Use custom Error class NegativeAmountError
      throw new NegativeAmountError(
        "The amount provided cannot be negative - L'importo depositato non può essere negativo"
      );
    }

    if (this.#amount < amount) {
      // throw new Error("You cannot withdraw more than account balance"); // Use custom Error class WithdrawNotPermittedError
      throw new WithdrawNotPermittedError(
        "You cannot withdraw more than account balance - Non puoi prelevare più del saldo del conto"
      );
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
//////
// // Il "pseudocodice" per la built-in class Error definita da JavaScript
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (differenti nomi per differenti classi di errori incorporate)
//     this.stack = <call stack>; // non-standard, ma la maggior parte degli ambienti lo supporta
//   }
// }
class NegativeAmountError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "Validation Error per importo negativo passato"; // (2)
  }
}
//
class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "Validation Error per importo prelevato maggiore del deposito"; // (2)
  }
}
///////
try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log("Something went wrong during bank account operations");
  console.log(e); // aggiunta per verificare errore verificato
}
