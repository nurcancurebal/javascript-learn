// Rastgele bir onaltılık sayı üreten bir komut dosyası yazın.


const randomNumbers = [];

for (let index = 0; index < 5; index++) {

    randomNumbers.push(Math.floor((Math.random() * 100) + 1));
};

const sayilariBirlestirVeStringYap = randomNumbers.join("");

const stringiTekrarNumberYap = parseInt(sayilariBirlestirVeStringYap); // sayı olarak birleştirmiş olduk

const numberIfadesiniHexedecimaleCevir = stringiTekrarNumberYap.toString(16);

const basinaDiyezEkle = "#" + numberIfadesiniHexedecimaleCevir;

console.log(basinaDiyezEkle);