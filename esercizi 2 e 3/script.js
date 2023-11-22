/* Esercizio 2: Cicli e Condizioni (15 punti)
Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.
2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
(10 punti)
3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. (5 punti)
4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata */
function calcoloConcatenazione(array) {
  let concatenazione = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith("a") || array[i].startsWith("A")) {
      concatenazione = concatenazione + array[i];
    }
  }
  if (concatenazione.length > 10) {
    concatenazione = concatenazione.substring(0, 10);
  }
  return concatenazione;
}

/*1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
del libro, e inizializzalo a 6 .
2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10
punti)
Il nuovo rating risultante, non può superare 10. (2.5 punti)
3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)
4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]" . (5 punti)*/

const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  rating: 6,
  increaseRating: function (incrementatoreRating) {
    this.rating += incrementatoreRating;
    if (this.rating > 10) {
      this.rating = 10;
    }
  },
};

delete book.year;
book.increaseRating(0);
const entries = Object.entries(book);
for (let i = 0; i < entries.length; i++) {
  const key = entries[i][0];
  const value = entries[i][1];
  console.log(`${key}: ${value}`);
}
