/*
Non primitive değişkenlerin değerlerini sonradan değiştirebiliyorken primitive değişkenler değişmez.

    1. Primitive Data Types(İlkel Veri Türleri)

1. String (Metin)
2. Number (Sayı)
3. Boolean (True or False)
4. Undefined (Tanımsız; herhangi bir değer atanmamış)
5. Null (Bilinmeyen veya boş değer)
6. Symbol (Symbol yapıcısı tarafından oluşturulabilen benzersiz bir değer)
7. Bigint (Büyük Sayı - isteğe bağlı uzunluktaki tam sayılar içindir.)

    2. Non Primitive(Reference) Data Types(İlkel Olmayan Veri Türleri)

1. Object (Nesne)
2. Array (Dizi)
3. Function (Fonksiyon)
*/

/* Number: Normal sayıların haricinde “özel sayısal değerler” de sayı olarak tanımlanabilir. Bunlar : Infinity, -Infinity
ve NaN gibi değerlerdir. Infinity matematiksel Sonsuzluğu ∞ ifade eder. Diğer tüm sayılardan büyük olan özel bir sayıdır.
NaN = bu matematiksel işlem hatalı */

/* Array: JavaScript typeof operatörü dizi veri türünü (array) nesne veri türü (object) olarak verir. JavaScript dizi veri
türünü, nesne veri türü olarak tanımlamıştır.*/

/* Bigint : JavaScript’te “number” türü, şundan büyük tamsayı değerlerini temsil edemez (2 üssü 53-1) (bu 9007199254740991),
veya daha az -(2 üssü 53-1) negatifler için. Dahili temsillerinden kaynaklanan teknik bir sınırlamadır. Çoğu amaç için bu
oldukça yeterlidir, ancak bazen gerçekten büyük sayılara ihtiyacımız olabilir, kriptografi veya mikrosaniye hassasiyetli
zaman damgaları için. Son zamanlarda, isteğe bağlı uzunluktaki tam sayıları temsil etmek için dile BigInt türü eklendi. Bir
tamsayının sonuna n eklenerek BigInt değeri oluşturulur: */

/* Null: Javascript’ de null primative bir değer olmasına rağmen ,bir object olarak algılanır. Yani tanımladığınız bir veri
içine null değer attığınızda bellekte bir alan tahsis edilir ancak içerisinde bir değer olmadığını söylemiş oluruz. Bu özel
durum aslında JavaScript’de hala çözülememiş bir bug olarak devam etmektedir. Null çok özel ve önemli bir veridir. */

/* Objeler ilkellere göre daha “ağırdırlar”. Daha fazla kaynak gerektirirler. Fakat özellikler ve metodlar çok önemli
olduklarından JavaScript motoru bunları olabildiğince optimize eder. */


// bigint örneği

// Sondaki "n" bu değerin bir BigInt olduğu anlamına gelir
const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof bigInt); // bigint


// Null örneği(yas bilinmiyor veya boş)

const one = null;

console.log(typeof one);   //! object


// Undefined örneği

let x;

console.log(typeof x);  // undefined


// Symbol örneğidir

let idOne = Symbol();

console.log(typeof idOne)  // symbol
//Ayrıca sembollere tanım açıklama ( sembol ismi ) verilebilir. Bu genelde hata ayıklarken kullanılır:

// idTwo açıklaması "id" olan bir semboldür. 
let idTwo = Symbol("id");


// Array örneğidir

let numb = ['nurcan', 27, false];

console.log(typeof numb);   //! object


// Obje örneğidir

let obj = {

    adi: 'nurcan',
    soyadi: 'cürebal',
    yasi: 27
};

console.log(typeof obj); // object


// String örneğidir

let name = 'nurcan';
let surname = 'cürebal';

let fullname = name + ' ' + surname;

console.log(typeof fullname);   // string


// Number örneğidir

let nurcanyas = 27;
let erdincyas = 26;

let fullName = nurcanyas + erdincyas; // +: iki sayı olduğu zaman toplama islemi yapar,string değer olduğu zaman yan yana yazar

console.log(typeof fullName);   // number


// function örneği

function hello(name) {

    return "Hello, " + name;
}

console.log(typeof hello);  // function


// Boolean

const trueorFalse = true;

console.log(typeof trueorFalse);   // boolean