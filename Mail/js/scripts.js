/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

/*
// Lista di chi può accedere
const mailList = ["example1@email.com", "example2@email.com", "example3@email.com"];

const myButton = document.getElementById('login');

myButton.addEventListener('click', function() {

    // Chiedere all'utente la sua email
    //const userMail = prompt("Inserisci la tua email:");
    const userMail = document.getElementById('mail').value;

    
    // Controlla l'email è nella lista di chi può accedere
    if (mailList.includes(userMail)) {
        console.log("Benvenuto!");
        document.getElementById('result').innerHTML = ("Benvenuto!");
    } else {
        console.log("La tua email non è autorizzata.");
        document.getElementById('result').innerHTML = ("La tua email non è autorizzata!");
    }
    
})
*/

const mailList = ["example1@email.com", "example2@email.com", "example3@email.com"];

const myButton = document.getElementById('login');

myButton.addEventListener('click', function() {

    // Ottieni il valore inserito dall'utente
    const userMail = document.getElementById('mail').value;

    // Inizializza una variabile per il risultato
    let result = "La tua email non è autorizzata.";

    // Verifica se l'email è nella lista di chi può accedere
    for (let i = 0; i < mailList.length; i++) {
        if (userMail == mailList[i]) {
            result = "Accesso consentito. Benvenuto!";
            break; // Esci dal ciclo se trovi un match
        }
    }

    // Stampa il risultato nell'HTML
    document.getElementById("result").innerText = result;
})