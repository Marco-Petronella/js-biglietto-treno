// età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale
// compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// quanto manca (OPZIONALE): utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica
// stabilire i minuti mancanti allo scoccare della prossima ora.

const age1 = Number(prompt("inserisci l'età del primo viaggiatore"));
const age2 = Number(prompt("inserisci l'età del secondo viaggiatore"));
let messageExercise2;
if (age1 < 0 || age2 < 0) {
  messageExercise2 = "sono state inserite età non valide. " + age1 + " " + age2;
} else if (age1 > age2) {
  messageExercise2 =
    "il primo viaggiatore con " +
    age1 +
    "anni è il più vecchio, il secondo viaggiore ha " +
    age2 +
    "anni";
} else if (age2 > age1) {
  messageExercise2 =
    "il secondo viaggiatore con " +
    age2 +
    "anni è il più vecchio, il primo viaggiore ha " +
    age1 +
    "anni";
} else {
  messageExercise2 =
    "i due viaggiatori hanno entrambi la stessa età con " + age1 + "anni";
}
console.log(messageExercise2);

const yourChoice = prompt("si vuole un numero pari o dispari?", "pari");
const yourNumber = Number(prompt("scegliere un numero tra 1 e 9"));
myNumber = parseInt(Math.random() * 9);

if (yourChoice != "pari" && yourChoice != "dispari") {
  messageExercise2 = "non è stato inserito un valore valido tra pari o dispari";
} else if (yourNumber < 1 || yourNumber > 9) {
  messageExercise2 = "non è stato inserito un numero valido per il pari o dispari";
} else {
  oddOrEven = (yourNumber + myNumber) % 2;
  if (yourChoice == "pari")
    if (oddOrEven == 0) {
      messageExercise2 = "hai scelto pari ed hai vinto";
    } else {
      messageExercise2 = "hai scelto pari ed hai perso";
    }
  else {
    if (oddOrEven == 0) {
      messageExercise2 = "hai scelto dispari ed hai perso";
    } else {
      messageExercise2 = "hai scelto dispari ed hai vinto";
    }
  }
}
console.log(messageExercise2);
console.log("mio numero=" + myNumber);
console.log("tuo numero=" + yourNumber);
console.log("tua scelta=" + yourChoice);

const currentData = new Date();
const toNextHour = 60 - (currentData.getMinutes() % 60);
messageExercise2 = "alla prossima ora mancano " + toNextHour + " minuti";
console.log(messageExercise2);
