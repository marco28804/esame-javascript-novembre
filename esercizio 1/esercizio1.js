let nomeUtente = prompt("Digita il tuo nome");
let anno = prompt("Digita il tuo anno di nascita");

if (anno % 100 === 0 && anno % 400 !== 0) {
  alert(`Mi dispiace ${nomeUtente} ma il tuo ${anno} non e' bisestile`);
} else {
  alert(`Si ${nomeUtente}  il tuo ${anno}  e' bisestile`);
}
