/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un numero random da 1 a 6
const diceThrow = Math.floor(Math.random() * 6) + 1;

// Lancio dei dadi per il giocatore e il computer
const player = diceThrow;
const computer = diceThrow;

// Stampa i risultati
console.log("Il giocatore ha ottenuto un punteggio di:", player);
console.log("Il computer ha ottenuto un punteggio di:", computer);

// Stabilire il vincitore
if (player > computer) {
    console.log("Il giocatore vince!");
} else if (player < computer) {
    console.log("Il computer vince!");
} else {
    console.log("È un pareggio!");
}