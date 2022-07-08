const ages = [19, 22, 31, 24, 20, 43, 26, 23, 32];

ages.sort();

console.log(ages);


const ortancaBoolean = ages.length % 2 == 0;

const ortancaKontrol = ages.length / 2;

const ortanca = ortancaBoolean ? (ages[ortancaortancaKontrol-1] + ages[ortancaortancaKontrol]) / 2 : ages[Math.floor(ortancaortancaKontrol)];

console.log(`Ortanca: ${ortanca}`);


const topla = ages.reduce((total, number) => {

    return total + number;
});

const average = topla / ages.length;

console.log("ortalama", average.toFixed(2));


let endAges = ages.length - 1;

let aralik = ages[endAges] - ages[0];

console.log(`${ages} min:${ages[0]} max: ${ages[endAges]}  max-min= ${aralik}`);