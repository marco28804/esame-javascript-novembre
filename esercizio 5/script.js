/*Esercizio 5: Error Handling e Parsing (20 punti)
Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).
2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un
Esame Modulo JavaScript 3
numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. (15 punti)
3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent . (2.5 punti)
4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. (2.5 punti) */

function power(base, exponent) {
  if (isNaN(base) && isNaN(exponent)) {
    console.log(null);
    throw new Error(`sia ${base},che ${exponent} non sono numeri`);

  } else if (isNaN(exponent)) {
    console.log(null);
    throw new Error(`il tuo esponente:${exponent} ,non e un numero`);

  } else if (isNaN(base)) {
    console.log(null);
    throw new Error(`la tua base:${base}, non e un numero`);

  }
  const result = base ** exponent;
  return result;
}

try {
  const risultato = power(2, 3);
  console.log(risultato);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("operazione completata");
}
