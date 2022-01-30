// # Closure - Exercise 3 ->16
// Implementare la funzione `createStore` che crea un array vuoto di prodotti
// e restituisce una closure che si occupa di aggiungere prodotti allo store.
// Per ogni prodotto aggiunto allo store eseguire il `console.log` dell'intero store

function createStore() {
  // creo array store passando i parametri valori in prodotto già come array
  const store = [];
  return function (prodotto) {
    store.push(prodotto);
    return store;
  };
}

const redPants = { id: 1, name: "Red Pants" };
const whiteHat = { id: 2, name: "White Hat" };

const blackSneakers = { id: 3, name: "Black Sneakers" };

console.log("--- Dress Store ---");
const dressStore = createStore();
// tolto e sostituito ocn riga sotto: dressStore(redPants);
console.log(dressStore(redPants));
// tolto e sostituito ocn riga sotto: dressStore(whiteHat);
console.log(dressStore(whiteHat));

console.log("--- Shoes Store ---");
const shoesStore = createStore();
// tolto e sostituito con riga sotto: shoesStore(blackSneakers);
console.log(shoesStore(blackSneakers));
