const randomNumbers = [];

for (let index = 0; index < 5; index++) {

    randomNumbers.push(Math.floor((Math.random() * 100) + 1));
};

const sayilariBirlestirVeStringYap = randomNumbers.join("");

const sekizinciSatirdakiStringDegiskeniNumberYap = parseInt(sayilariBirlestirVeStringYap);

const yukardakiNumberIfadesiniHexedecimaleCevir = sekizinciSatirdakiStringDegiskeniNumberYap.toString(16);

const basinaDiexEkle = "#" + yukardakiNumberIfadesiniHexedecimaleCevir;

console.log(basinaDiexEkle);