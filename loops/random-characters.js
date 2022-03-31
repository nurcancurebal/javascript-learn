const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "v", "y", "z"];

let key = "";
let keyTwo ="";

for(let i=0; i<=10; i++){
    let randomNumber = data[Math.floor((Math.random() * data.length) + 1)];
    key = key +randomNumber;
}

for(let index=0; index<=5; index++){
    let randomNumber = data[Math.floor((Math.random() * data.length) + 1)];
    keyTwo = keyTwo +randomNumber;
}

console.log(key);
console.log(keyTwo)

//! arada bir undefined değeri dönüyor neden?