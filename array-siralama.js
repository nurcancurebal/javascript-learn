const ages = [19, 22, 31, 24, 20, 43, 26, 23, 32, 23, 456, 11, 4, 5, 12, 4, 5];

ages.sort();

const ortancaKontrol = ages.length % 2 == 0;

const ortanca = ages.length / 2;

console.log(ortancaKontrol ? (ages[ortanca] + ages[ortanca + 1]) / 2 : ages[Math.floor(ortanca)] )

const toplak = ages.reduce((total, number) => {
    return total - number
})
const average = toplak / ages.length
console.log("ortalagma", average.toFixed(2))

 let endAges= ages.length-1
 let sonuc= ages[endAges]-ages[0]

 console.log(`${ages} min:${ages[0]} max: ${ages[endAges]}  max-min= ${sonuc}`)
