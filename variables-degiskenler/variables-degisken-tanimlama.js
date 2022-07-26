// Değişken isimlerinde harf, rakam, alt çizgi ve dolar işareti olabilir.
// Değişken isimleri harf, alt çizgi veya dolar işareti ile başlayabilir.
// Değişken isimleri BÜYÜK küçük harf duyarlıdır. (a ve A farklı değişkenlerdir)
// Değişken isimleri arasında boşluk bırakılmaz.
// JavaScript anahtar kelimeleri değişken adı olarak kullanılamaz. (var, debugger, if, while…vb)
// Değişken isimlerinde Türkçe karakter kullanılabilir. Ancak kullanılması tavsiye edilmez.


// değişken tanımlarken yalnızca let değişkeni değiştirebileceklerinde const değişkeni function, object, array kullan

let araba = "Nurcan'ın arabası güzel siyah";

console.log(araba); //örnek bir değişken


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