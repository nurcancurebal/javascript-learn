/* -> Testler: isFinite ve isNaN
Hatırlarsanız iki tane özel sayı vardı.
--Infinite (ve -Infinite), bu sayı hersayıdan büyüktür, veya her sayıdan küçüktür.
--NaN ise bir hata göstergesidir.
Her ikisi de number tipine aittirler, fakat “normal” sayı değildirler. Bundan dolayı bunların kontrolü için özel
fonksiyonlar bulunmaktadır. */


// -> isNaN(deger) argümanı sayıya çevirir ve sayı olup olmadığını kontrol eder. Sayı ise false döner.

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(isNaN("3")); // false
console.log(isNaN("")); // false

/* Bu fonksiyona ihtiyacınız var mı? Sadece === NaN kullanılsa ? Malesef ihtiyaç var. NaN kendi başına hiçbir şeye eşit değildir, hatta kendisine bile: */

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

// -> isFinite(deger): argümanı sayıya çevirir ve normal sayı ise true, değil ise NaN/Infinity/-Infinity döndürür:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false,  NaN döndürür.
console.log(isFinite(Infinity)); // false, Infinity döndürür.
console.log(isFinite('')); // true
console.log(isFinite(1)); // true

// Bazen isFinite karakterin sayı olup olmadığını kontrol için kullanılır:

let num = '';

// Infinity girmediğiniz taktirde `true` olacaktır. -Infinity diye bir sayı yoktur.
console.log(isFinite(num)); // true

/* Aklınızda bulunsun tüm boş veya sadece boşluk tuşu ile yazılan tüm değerler 0 olarak kabul edilir isFinite'de bu şekilde
çalışır. */


/* -> Object.is ile karşılaştırma
Özel bir dahili metod olan Object.is ile değerler === gibi karşılaştırılabilir. İki durum için daha güvenlidir denebilir:
1. NaN ile çalışır: */

console.log(Object.is(NaN, NaN)); // true, === true bu iyi

// 2. 0 ve -0 farklıdır:

console.log(Object.is(0, -0)); // false, === false neredeyse hiç kullanılmaz, ama yinede teknik olarak farklıdırlar.

/* Tüm durumlarda Object.is(a, b) a === b ile aynıdır.

Bu tür karşılaştırma genelde JavaScript içerisinde kullanılır. JavaScript içinde eğer algoritma iki değerin kesinlikle aynı
olup olmadığını kontrol etmek istiyorsa Object.is kullanılır. */