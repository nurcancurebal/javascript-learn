/* Şu ana kadar bu karmaşık veri yapılarını gördük:

Anahtar değere sahip verileri tutan objeler.
Sıralı bir biçimde verileri tutan Diziler.
Ancak bunlar yeterli olmayabiliyorlar. Bu yüzden Map ve Set diye yapılar bulunuyor. (Collections)


-> Map
Map, anahtar değere sahip veriler tutan bir yapıdır(collection). Tıpkı Obje gibi. Fakat aralarındaki en önemli farklardan biri Mapler anahtar değer olarak herhangi bir tipte olabilirler.

Ana fonksiyonlar şu şekildedir:

new Map() – map yaratır.
map.set(key, value) – Anahtara değer atar.
map.get(key) – Anahtarın değerini döndürür. Eğer öyle bir anahtar yoksa undefined döndürür.
map.has(key) – Eğer öyle bir anahtar varsa true yoksa false döndürür.
map.delete(key) – Verilen anahtara ait değeri siler.
map.clear() – Mapin içini temizler.
map.size – anlık eleman sayısını döndürür.
Örneğin: */

let map = new Map();

map.set('1', 'str1');   // String tipinde anahtar
map.set(1, 'num1');     // Sayı tipinde anahtar
map.set(true, 'bool1'); // boolean tipinde anahtar

// sıradan Objeleri hatırlıyorsunuzdur. Anahtar değerleri stringe dönüşürdü
// Map anahtar tipini de korur, tıpkı şu 2 farklı şekilde olduğu gibi:

console.log(map.get(1)); // num1
console.log(map.get('1')); // str1

console.log(map.size); // 3

/* Gördüğümüz üzere, objelerden farklı olarak, anahtarlar stringe dönüşmediler. Herhangi bir tipte anahtar kullanmak mümkündür.

Map’ler ayrıca anahtar olarak Obje de kullanabilir.

Örneğin: */

let john = { name: "John" };

// John'un ziyaret sayısını tutalım
let ziyaretSayisiMap = new Map();

// john map için anahtar olarak kullanıldı
ziyaretSayisiMap.set(john, 123);

console.log(ziyaretSayisiMap.get(john)); // 123

console.log(ziyaretSayisiMap); // Map(1) { { name: 'John' } => 123 }

/* Nesneleri anahtar olarak kullanmak, en dikkate değer ve önemli Map özelliklerinden biridir. String anahtarlar için Obje yeterli olabilir fakat yukarıdaki örnek için Map yerine Obje kullanmak daha zordur.

Eskiden, Mapin olmadığı zamanlarda, geliştiriciler objelere eşsiz tanımlayıcılar eklerdi: */

// id değeri ekledik

let nurcan = { name: "Nurcan", id: 1 };

let ziyaretSayisi = {};

// şimdi id kullanarak veriyi tuttuk
ziyaretSayisi[nurcan.id] = 123; // ziyaretSayisi nin içine ziyaretSayisi: {1: 123} olarak eklendi

console.log(ziyaretSayisi[nurcan.id]); // 123

/* ziyaretSayisi bir nesne olduğundan, John gibi tüm anahtarları dizelere dönüştürür, bu nedenle “[object Object]” dize anahtarına sahibiz.

…Ama Map kullanması çok daha hoş.

Map anahtarları nasıl karşılaştırır"

Değerlerin eşitliğini test etmek için ‘Map’ SameValueZero algoritmasını kullanır. Bu algoritma sıkı eşitlik === ile kabaca aynıdır fakat farkı NaNın NaNa eşit olmasıdır. Böylece NaN bir anahtar değer olarak kullanılabilir.

Bu algoritma değiştirilemez veya özelleştirilemez.

````"Zincirleme"

Tüm `map.set` çağırmaları mapin kendisini döndürür. Böylece çağırmaları `zincir`leyebiliriz:

```js
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
``` */