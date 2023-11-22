window.addEventListener("load", () => {
  const botton = document.querySelector("button");
  botton.addEventListener("click", () => {
    const input = document.getElementById("testo");
    const p = document.getElementById("errorMessage");
    const ul = document.getElementById("tasks");

    if (input.value === "") {
      p.innerText = "per favore inserisci del testo";
    } else {
      p.value = "";
      const li = document.createElement("li");
      li.textContent = input.value;
      ul.appendChild(li);
      //se vogliamo svuotarel input basta fare input.value="" pero non e a richiesta della traccia
    }
  });
});
