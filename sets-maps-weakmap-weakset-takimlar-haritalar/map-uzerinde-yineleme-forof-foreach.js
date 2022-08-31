/* -> Map üzerinde yineleme
Map üzerinde döngü yapmak için 3 metod vardır:

map.keys() – anahtarlar için bir yinelenebilir döndürür
map.values() – değerler için bir yinelenebilir döndürür
map.entries() – [key, value] girişleri için bir yinelenebilir döndürür, for..of içinde varsayılan olarak kullanılır.
Örneğin: */

let yemekMap = new Map([
    ['salatalik', 500],
    ['domates', 350],
    ['sogan', 50]
]);

// anahtarlar üzerinde yineleme (sebzeler)
for (let vegetable of yemekMap.keys()) {

    console.log(vegetable);
}
// salatalik
// domates
// sogan

// değerler üzerinde yineleme (miktarlar)
for (let amount of yemekMap.values()) {

    console.log(amount);
}
// 500
// 350
// 50

// [anahtar, değer] üzerinde yineleme
for (let entry of yemekMap) { // yemekMap.entries() ile aynı

    console.log(entry);
}
// [ 'salatalik', 500 ]
// [ 'domates', 350 ]
// [ 'sogan', 50 ]

/* Eklenme sırasıyla kullanıldı
Yineleme değerlerin eklenme sırasıyla yapıldı. Sıradan Objelerden farklı olarak Map bu sırayı korur.

Bunun yanı sıra, Map yerleşik forEach metoduna sahiptir, tıpkı Dizi gibi: */

yemekMap.forEach((value, key, map) => {

    console.log(key, value, map);
});
// salatalik 500 Map(3) { 'salatalik' => 500, 'domates' => 350, 'sogan' => 50 }
// domates 350 Map(3) { 'salatalik' => 500, 'domates' => 350, 'sogan' => 50 }
// sogan 50 Map(3) { 'salatalik' => 500, 'domates' => 350, 'sogan' => 50 }