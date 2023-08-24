/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//chiedere all'utente nome, chilometri da percorrere ed età

const userName = document.querySelector('#name').value;
const kmUser = document.querySelector('#km').value;
const userAge = document.querySelector('#age').value;
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    window.location.reload();
})

console.log(userName,kmUser,userAge);
