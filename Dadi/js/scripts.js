/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//NB lascio di proprosito le varie possibilità come commenti e tengo quella che esteticamente preferisco

//const playground = document.querySelector('#playground');

const myButton = document.getElementById('play');

myButton.addEventListener('click', function() {

    // Generare un numero random da 1 a 6
    const diceThrowPlayer = Math.floor(Math.random() * 6) + 1;
    const diceThrowComputer = Math.floor(Math.random() * 6) + 1;

    // Lancio dei dadi per il giocatore e il computer
    const player = diceThrowPlayer;
    const computer = diceThrowComputer;

    // Stampa i risultati
    console.log("Player's result:", player);
    console.log("CPU's result:", computer);

    //const result = document.createElement('div');

    // Stabilire il vincitore
    let = result;

    if (player > computer) {
        console.log("Player win!");
        result = ("Player win!");
        document.getElementById("result").className = "player";
        //result.classList.add("text-center", "m-2", "fs-3", "text-warning");
        //result.append("Player win!");

    } else if (player < computer) {
        console.log("CPU win!");
        result = ("CPU win!");
        document.getElementById("result").className = "cpu";
        //result.classList.add("text-center", "m-2", "fs-3", "text-danger");
        //result.append("CPU win!");

    } else {
        console.log("Draw!");
        result = ("Draw!");
        document.getElementById("result").className = "draw";
        //result.classList.add("text-center", "m-2", "fs-3", "text-info");
        //result.append("Draw!");
    }

    // Inserimento elemento nel container
    // playground.append(result);

    // Stampa il risultato nell'HTML
    document.getElementById("result").innerHTML = result;

})
