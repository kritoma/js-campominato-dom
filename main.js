// generare i numeri vietati
const numberBomb = [];
do {
    let bomb = (Math.floor(Math.random() * 100) + 1);
    if(!numberBomb.includes(bomb)){    
    numberBomb.push(bomb);
    };
    
} while ( numberBomb.length < 16);



// chiedere all'utente di iserire un numero
let listUserNumber = [];
let usernumber;

do {
    usernumber = Number(prompt("inserisci un numero tra 1 a 100"));
    if ( usernumber <= 100 && usernumber > 0) {
        if(!listUserNumber.includes(usernumber)){
        listUserNumber.push(usernumber);
    } else {
        usernumber = Number(prompt("il precedente numero è gia stato inserito"));
    };
    }else {
        usernumber = Number(prompt("il numero deve essere tra 1 e 100"));
    }
    
    
} while ( listUserNumber.length < 84 && !numberBomb.includes(usernumber));

if (numberBomb.includes(usernumber)){
    console.log("Hai perso. Hai indovinato " + (listUserNumber.length - 1) + " numeri.");
} else {
    console.log("hai vinto!!");
};

console.log(numberBomb);
console.log(listUserNumber);