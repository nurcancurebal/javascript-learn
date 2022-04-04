// Rastgele bir RGB renk numarası üreten bir komut dosyası yazın.


const randomNumbers = [];

for (let index = 0; index < 3; index++) {

    randomNumbers.push(Math.floor((Math.random() * 255) + 1));
};

console.log(`rgb(${randomNumbers[0]},${randomNumbers[1]},${randomNumbers[2]})`);