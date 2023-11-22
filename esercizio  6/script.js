/*1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
memoria ed elencali. (2.5 punti)

2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead .

3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
cambia la proprietà projectName di devTeam2 in "MobileApp". (2.5 punti)

4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
parametro name (stringa). Durante la creazione dell’oggetto, la funzione
dovrebbe anche assegnare un array skills con tre stringhe casuali tra
"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
"PostgreSQL". (5 punti)

Usa questa funzione per aggiungere un nuovo tester a devTeamCopy . (2.5 punti)
5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
iniziali, e giustifica la tua risposta. (2.5 punti)*/

const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};
/*l oggetto in questione a primo impatto sembra che contiente piu di un oggetto come lead e testers.
   pero questi oggetti sono rinchiusi a loro volta in un oggetto principale cioe devTeam 
   quidni in sostanza e come se c e ne fosse solo 1 caricato in memoria che
   pero contiene altri oggetti al suo interno,pero l oggetto principale e solo 1. */

let teamLead = devTeam.lead;
teamLead.skills.push("GraphQL");

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));

devTeamCopy.projectName = "MobileApp";
console.log(devTeamCopy);

function CreateTester(nomeV) {
  const arraySkill = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "PostgreSQL",
  ];

  function randomString() {
    const arrays = [];
    for (let i = 0; i < 3; i++) {
      let indiceStringaCasuale;
      indiceStringaCasuale = Math.floor(Math.random() * arraySkill.length);
      arrays.push(arraySkill[indiceStringaCasuale]);
    }
    return arrays;
  }

  let tester = {
    name: nomeV,
    skill: randomString(),
  };
  return tester;
}

let tester = CreateTester("marco");
devTeamCopy.testers.push(tester);
console.log(devTeamCopy);

//alla fine dell esercizio abbiamo 3 oggetti in memoria,il 1 e quello principale iniziale cioe devTeam.
//il secondo invece e la copia di devTeam , infatti facendo una copia in memoria noi e come se avessimo 2 oggetti diversi anche se "uguali"
//il terzo oggetto invece l'abbiamo avuto con Tester,perche appunto noi abbiamo creato un oggetto che poi e stato pushato nella copia dell oggetto principale,ma lo spazio in memoria
//l'oggetto l'ho occupa sempre e quidni e come se fosse un oggetto diverso tra gli altri 2.
