/* 1. Primitive Data Types(İlkel Veri Türleri)

1. Strings
2. Numbers(sayı): Normal sayıların haricinde “özel sayısal değerler” de sayı olarak tanımlanabilir. Bunlar : Infinity,
-Infinity ve NaN gibi değerlerdir. Infinity matematiksel Sonsuzluğu ∞ ifade eder. Diğer tüm sayılardan büyük olan özel bir
sayıdır. NaN = bu matematiksel işlem hatalı
3. Booleans(true or false)
4. Undefined (tanımsız; herhangi bir değer atanmamış)
5. Null (bilinmeyen veya boş değer)
6. Symbol(Symbol yapıcısı tarafından oluşturulabilen benzersiz bir değer)

    2. Non Primitive Data Types(İlkel Olmayan Veri Türleri)

1. Objects
2. Arrays(diziler)

Non primitive değişkenlerin değerlerini sonradan değiştirebiliyorken primitive değişkenler değişmez */


/* BigInt – Büyük Sayı(isteğe bağlı uzunluktaki tam sayılar içindir.): JavaScript’te “number” türü, şundan büyük tamsayı
değerlerini temsil edemez (2 üssü 53-1) (bu 9007199254740991), veya daha az -(2 üssü 53-1) negatifler için. Dahili
temsillerinden kaynaklanan teknik bir sınırlamadır. Çoğu amaç için bu oldukça yeterlidir, ancak bazen gerçekten büyük
sayılara ihtiyacımız olabilir, kriptografi veya mikrosaniye hassasiyetli zaman damgaları için. Son zamanlarda, isteğe bağlı
uzunluktaki tam sayıları temsil etmek için dile BigInt türü eklendi. Bir tamsayının sonuna n eklenerek BigInt değeri
oluşturulur: */

// Sondaki "n" bu değerin bir BigInt olduğu anlamına gelir
const bigInt = 1234567890123456789012345678901234567890n;


// Null örneği(yas bilinmiyor veya boş)

let yas = null;

console.log(yas);

// Undefined örneği

let x;

console.log(x);


// Symbol örneğidir

console.log('This is a backslash  symbol (\\)');   // This is a backslash  symbol (\)


// Array örneğidir

let numb = ['nurcan', 27, false];

console.log(numb);


// Obje örneğidir

let obj = {

    adi: 'nurcan',
    soyadi: 'cürebal',
    yasi: 27
};

console.log(obj);


// String örneğidir

let name = 'nurcan';
let surname = 'cürebal';

let fullname = name + ' ' + surname;

console.log(fullname);


// Numbers örneğidir

let nurcanyas = 27;
let erdincyas = 26;

let fullName = nurcanyas + erdincyas;

console.log(fullName);   // +: iki sayı olduğu zaman toplama islemi yapar,string değer olduğu zaman yan yana yazar