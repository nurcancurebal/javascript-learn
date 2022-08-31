/* Sıralı erişilebilen anahtarlar

map.keys() dizisini alıp bunun ile uğraşmak istenmekte.

Fakat bir problem var: */

let map = new Map();

map.set("adi", "Abdullah");

let keys = map.keys();

keys.push("daha fazla"); // Error: numbers.push adında bir fonksiyon bulunmamaktadır.

// Neden? keys.push kodunu nasıl düzeltebilirsiniz?

/* çözüm
Çünkü map.keys() sıralı erişim objesi ( iterable ) döndürüyor. push metodu dizi'lere ait bir metoddur.

Array.from ile bunu diziye çevirebilirsiniz: */

let mapTwo = new Map();

mapTwo.set("adi", "Abdullah");

let keysTwo = Array.from(mapTwo.keys());

keysTwo.push("daha fazla");

console.log(keysTwo); // [ 'adi', 'daha fazla' ]