/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un numero random da 1 a 6
const diceThrowPlayer = Math.floor(Math.random() * 6) + 1;
const diceThrowComputer = Math.floor(Math.random() * 6) + 1;

// Lancio dei dadi per il giocatore e il computer
const player = diceThrowPlayer;
const computer = diceThrowComputer;

// Stampa i risultati
console.log("Player's result:", player);
console.log("CPU's result:", computer);

// Stabilire il vincitore
if (player > computer) {
    console.log("Player win!");
} else if (player < computer) {
    console.log("CPU win!");
} else {
    console.log("Draw!");
}