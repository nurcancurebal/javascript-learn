/* -> Set üzerinde yineleme
‘for…of’ veya ‘forEach’ kullanarak set üzerinde yineleme yapmamız mümkündür: */

let set = new Set(["portakal", "elma", "muz"]);

for (let value of set) console.log(value);
// portakal
// elma
// muz

// forEach ile de aynı şekilde:
set.forEach((value, valueAgain, set) => {

    console.log(value, valueAgain, set);
});
// portakal portakal Set(3) { 'portakal', 'elma', 'muz' }
// elma elma Set(3) { 'portakal', 'elma', 'muz' }
// muz muz Set(3) { 'portakal', 'elma', 'muz' }

/* Komiktir ki Set içerisindeki forEach` fonksiyonu 3 argümana sahiptir: bir değer, sonra tekrardan bir değer, ve hedef obje. Aslında aynı değeri argümanda 2 kez görürürüz.

Bu, 3 argüman alan forEach fonksiyonuna sahip olan Map ile uyumlu olması için yapılmıştır.

Mapin sahip olduğu yineleme yapan fonksiyonlar burada da vardır:

set.keys() – değerler için bir yinelenebilir nesne döndürür,
set.values() – set.keys ile aynı, Map ile uyumlu olması için yapılmış,
set.entries() – [value, value] girişleri için yinelenebilir obje döndürür, Map ile uyumlu olması için vardır. */