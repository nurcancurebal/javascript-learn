// Değişken isimlerinde harf, rakam, alt çizgi ve dolar işareti olabilir.
// Değişken isimleri harf, alt çizgi veya dolar işareti ile başlayabilir.(İlk karakter rakam olamaz.)
// Değişken isimleri BÜYÜK küçük harf duyarlıdır. (a ve A farklı değişkenlerdir)
// Değişken isimleri arasında boşluk bırakılmaz.
// JavaScript anahtar kelimeleri değişken adı olarak kullanılamaz. (var, debugger, if, while…vb)
// Değişken isimlerinde Türkçe karakter kullanılabilir. Ancak kullanılması tavsiye edilmez.

// Eğer isim birden fazla kelime kullanıyorsa deveHörgücü veya camelCase küçük harfle başlanıp her kelimenin baş harfi
// büyük olacak şekilde devam etme yöntemine deveHörgücü yöntemi denir. Bu yöntem yaygın bir şekilde kullanılır.
// Örneğin : benimUzunDegiskenim gibi.

// değişken tanımlarken yalnızca let değişkeni değiştirebileceklerinde const değişkeni function, object, array kullan

// Genel kullanımda sabitler büyük harf ile isimlendirilirler. Eğer birden fazla kelimeden oluşuyorsa “_” ile bu kelimeleri
// ayırmak mümkündür.

const RENK_KIRMIZI = "#F00";
const RENK_YESIL = "#0F0";
const RENK_MAVI = "#00F";
const RENK_TURUNCU = "#FF7F00";


// Sabitler için ne zaman büyük harf kullanılmalı ne zaman kullanılmamalı ?
//“Sabit” değeri hiç değişmeyen demek. Fakat bazı değişkenler örneğin kırmızının hexadecimal karşılığı çalışmadan önce bilinirken bazıları çalışma zamanında hesaplanır fakat sonrasında değişmez.

const sayfaYuklenmeSuresi = /* Sayfanın yüklenme süresini tutar. */;

//Diğer bir deyişle büyük harfle yazılan değişken isimleri sadece önceden bilinen değerleri tanımlamak için kullanılır.


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