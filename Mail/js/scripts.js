/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

// Lista di chi può accedere
const mailList = ["example1@email.com", "example2@email.com", "example3@email.com"];

// Chiedere all'utente la sua email
const userMail = prompt("Inserisci la tua email:");

// Controlla l'email è nella lista di chi può accedere
if (mailList.includes(userMail)) {
    console.log("Benvenuto!");
} else {
    console.log("La tua email non è autorizzata.");
}