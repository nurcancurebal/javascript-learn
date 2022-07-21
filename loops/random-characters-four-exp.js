// Herhangi bir sayıda rastgele karakter oluşturan küçük bir komut dosyası geliştirin:

const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let key = "";
let keyTwo = "";

for (let i = 0; i <= 10; i++) {

    let randomNumber = data[Math.floor((Math.random() * data.length))];

    key = key + randomNumber;
};

console.log(key);


for (let index = 0; index <= 5; index++) {

    let randomNumber = data[Math.floor((Math.random() * data.length))];
    
    keyTwo = keyTwo + randomNumber;
};

console.log(keyTwo);