// età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale 
// compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// quanto manca (OPZIONALE): utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica 
// stabilire i minuti mancanti allo scoccare della prossima ora.

const age1 = Number(prompt("inserisci l'età del primo viaggiatore"));
const age2 = Number(prompt("inserisci l'età del secondo viaggiatore"));
let message;
if (age1 < 0 || age2 <0) {
    message = "sono state inserite età non valide. " +age1 +" " + age2;
}
else if (age1>age2) {
    message = "il primo viaggiatore con " + age1 + "anni è il più vecchio, il secondo viaggiore ha " + age2 + "anni";
}
else if (age2>age1) {
    message = "il secondo viaggiatore con " + age2 + "anni è il più vecchio, il primo viaggiore ha " + age1 + "anni";
}
else {
    message = "i due viaggiatori hanno entrambi la stessa età con " + age1 + "anni";
}
console.log(message);
