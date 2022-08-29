/* “length” ile ilgili bir not.
length özelliği dizi düzenlendiğinde otomatik olarak güncellenir. Tam olarak bu uzunluk dizideki eleman sayısı değildir, en büyük sayısal indeksin bir fazlasıdır.

Örneğin indeksi büyük tek bir elemanlı dizi büyük uzunluk verir: */

let meyveler = [];
meyveler[123] = "Elma";

console.log(meyveler.length); // 124

/* Genelde diziler bu şekilde kullanılmaz.

length hakkında diğer bir ilginç bilgi ise bu özelliğin yazılabilir olmasıdır.

Eğer elle bu değeri yükseltirseniz hiçbir şey olmaz, fakat düşürürseniz dizideki elemanlar silinir. Bu işlem geri döndürülemez, örneğin: */

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 2 elemana düşür
console.log(arr); // [1, 2]

arr.length = 5; // uzunluğu geri al
console.log(arr[3]); // undefined: değer dönmez

/* Dizinin içerisini silmenin kolay yolu : arr.length=0. */