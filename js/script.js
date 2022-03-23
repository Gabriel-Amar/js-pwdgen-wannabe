let userName = prompt("Inserisci il tuo nome");
console.log(userName)

let userSur = prompt("Inserisci il tuo cognome");
console.log(userSur)

let color = prompt("Inserisci un colore");
console.log(color)

let userAge = prompt("Inserisci età");
console.log(userAge)

document.getElementById('password').innerHTML += ' ' + userName + userSur + color + userAge
