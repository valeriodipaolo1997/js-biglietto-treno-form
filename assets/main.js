/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//chiedere all'utente nome, chilometri da percorrere ed età

const btn = document.querySelector('[type=submit]');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = document.querySelector('#name').value;
    let kmuser = document.querySelector('#km').value;
    let userAge = document.querySelector('#age').value;
    console.log(userName,kmuser, userAge);

const ticketPrice = kmuser * 0.21;

let discountTicket;
let finalPrice;

//calcolare il prezzo in base all'età e i chilometri

if (userAge === 'junior') {

    discountTicket = ticketPrice * 20 / 100;
    finalPrice =(ticketPrice - discountTicket).toFixed(2);
    console.log(finalPrice);

} else if (userAge === 'senior') {

    discountTicket = ticketPrice * 40 / 100;
    finalPrice = (ticketPrice - discountTicket).toFixed(2);
    console.log(finalPrice);

} else {

    finalPrice = ticketPrice.toFixed(2);
    console.log(finalPrice);

};

//stampo il risultato in pagina

const userNameTicket = document.querySelector('.user_name');
userNameTicket.textContent = userName;

const userTicketPrice = document.querySelector('.ticket_price');
userTicketPrice.textContent = finalPrice + ' €';
})
