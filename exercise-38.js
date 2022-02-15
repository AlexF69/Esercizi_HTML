// # Classes - Exercise 5 --> 38
// Definire la classe BankAccountVip che estendendo dalla classe BankAccount, oltre a consentire tutte
// le operazioni di quest'ultima, permette all'utente di ottenere un interesse del 3% sull'importo depositato,
// ma solo se nel bilancio del conto è presente una cifra maggiore o uguale a 1000€

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
// new classe VIP
class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }
  // prende di default tutti i metodi del padre. Aggiungo/cambio il metodo di calcolo percentuale
  // per ogni deposito maggiore di 1000E sovrariscrivendo il metodo di deposito della classe superiore
  // e aggingendo un controllo
  deposit(deposito) {
    if (deposito >= 1000) {
      super.deposit(deposito + (deposito / 100) * 3);
    } else super.deposit(deposito);
  }
} // fine classe BankAccountVip

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
