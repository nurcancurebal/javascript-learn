/* değişken tanımlarken yalnızca 
let değişkeni değiştirebileceklerinde
const değişkeni function, object, array kullan */

let araba = "Nurcan'ın arabası güzel siyah";

console.log(araba); //örnek bir değişken

// _ ve $ ile değişken başlar diğerleri ile başlamaz

let _NurcaninYasi = 27;
let $NurcaninKedisi = 'bal';
const Nurcaninsoyadi = 'cürebal';
const NurcaninKocasi = 'erdinç';

console.log(_NurcaninYasi, Nurcaninsoyadi, NurcaninKocasi, $NurcaninKedisi);


let name = "nurcan";
let surname = 'cürebal';
let a = 5;
let b = 4;
let fullName = `Test deneme

${a} + ${b} = ${a + b} 
${name} ${surname}`;

console.log(fullName);


const firstname = "Nurcan";
const lastname = "Cürebal";
const birthYear = 1995;

const nowYear = new Date().getFullYear();

const newList = `
Adım: ${firstname} ${lastname}
Doğum yılım: ${birthYear}
Şuanki yıl: ${nowYear}
Kaç yaşındayım: ${nowYear - birthYear}
`;

console.log(newList);