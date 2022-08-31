/* -> Karakter dizilerine sıralı erişim
Diziler ve karakter dizileri(string) en fazla kullanılan sıralı erişime sahip tiplerdir.

Karakter için for..of karakterleri üzerinden geçer: */

for (let char of "test") {

    console.log(char);
}
// t
// e
// s
// t

// Vekil çiflerin yerine geçerek de çalışabilir.

let str = '𝒳😂';

for (let char of str) {

    console.log(char);
}
// 𝒳
// 😂


/* -> Sıralı erişim elemanlarını dışardan çağırma
Normalde, sıralı erişim elemanları dışardan kod çağırmaya kapatılmıştır. for..of döngüsü çalışır ve bu da tek bilinmesi gereken olaydır.

Olayı daha derinlemesine anlayabilmek için dışarıdan nasıl sıralı erişim yaratılır buna bakalım.

Karakter dizisini aynı for..of gibi döneceğiz fakat doğrudan çağrılarla. Bu kod karakter dizisi erişim elemanını alır ve bunu manuel bir şekilde yapar: */

let str2 = "Hello";

// for (let char of str2) console.log(char);
// ile aynı şekilde çalışır

let iterator = str2[Symbol.iterator]();

while (true) {

    let result = iterator.next(); // result: {value: 'H', done: false} içinde bu var burası next()' te oluşuyor
    //! en son 'o' harfini yazdıktan sonra buraya tekarar dönüyor result: {value: undefined, done: true} olur

    if (result.done) break; // result.done true olunca duracak

    console.log(result.value);
}
// H
// e
// l
// l
// o


/* Buna çok nadir ihtiyaç olur. Fakat bu bize for..of'tan daha fazla kontrol yetkisi verir. Örneğin bu sıralı erişim olayını bazen çalıştırıp bazen çalıştırma veya o ara bir şeyler yaptırma mümkün olmaktadır. */