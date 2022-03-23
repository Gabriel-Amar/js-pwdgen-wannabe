/*
A[Creare una variabile] --> B[Dare un nome alla variabile]
B --> C[Dare un valore alla variabile]
C --> R[Dare come valore prompt con una domanda]
R --> D[Fare un test con console.log] 
D --> E{Funziona tutto?}
E --> |Sì| F[Vado avanti]
E --> |No| G[Esamino l'errore nella console]
G --> I[Risolvo l'errore]
I --> F
F --> H[Copio il codice per 4 volte]
H --> J[Cambio ad ogni sezione il nome della variabile e la domanda]
J --> K[Prendo l'elemento document]
K --> L[Uso il metodo getElementById]
L --> M[Gli assegno un id precedentemente creato]
M --> N[Uso innerHTML per prendere il contenuto dell'elemento con id]
N --> O[Aggiunto un valore a questa variabile tramite +=]
O --> P[Aggiungo tutti i nomi delle variabili precedenti precedute da un +]
*/

let userName = prompt("Inserisci il tuo nome");
console.log(userName)

let userSur = prompt("Inserisci il tuo cognome");
console.log(userSur)

let color = prompt("Inserisci un colore");
console.log(color)

let userAge = prompt("Inserisci età");
console.log(userAge)

document.getElementById('password').innerHTML += ' ' + userName + userSur + color + userAge
