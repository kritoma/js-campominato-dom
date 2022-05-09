const numberBomb = [];
do {
    let bomb = (Math.floor(Math.random() * 10) + 1);
    if(!numberBomb.includes(bomb)){    
    numberBomb.push(bomb);
    }
    
} while ( numberBomb.length < 2);

console.log(numberBomb);