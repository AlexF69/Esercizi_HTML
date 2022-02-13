// # Classes - Exercise 4 -->37
// Definire la classe `BankAccount` che, dato in input un importo iniziale, consente di eseguire operazioni
// di deposito, ritiro e visualizzazione sul proprio conto corrente.
// La classe in questione dovrà implementare i seguenti metodi:

// * `deposit`: un metodo pubblico che consente di aggiungere fondi al proprio conto corrente
// * `withdraw`: un metodo pubblico che consente di ritirare fondi dal proprio conto corrente
// * `view`: un metodo pubblico che consente di visualizzare in console il saldo finale del conto corrente

class BankAccount {
  #amount = "";
  constructor(initialAmount) {
    // viene richiamato solo quando si fa new classe
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount = this.#amount + amount;
    return this.#amount;
  }

  withdraw(amount) {
    this.#amount = this.#amount - amount;
    return this.#amount;
  }
  view() {
    return console.log(this.#amount);
  }
}

// i PARAMETRI del costruttore sono i parametri della classe da passare quando richiamo la classe con NEW
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
