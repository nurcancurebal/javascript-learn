/* -> Set
Set her değerin sadece birer kez olabileceği yapılardır(collection).

Ana fonksiyonlar şu şekildedir:

. new Set(iterable) – set oluşturur, isteğe bağlı olarak değerler içeren diziden de oluşturulabilir.
. set.add(value) – bir değer ekler, set’in kendisini döndürür
. set.delete(value) – değeri siler. Eğer öyle bir değer varsa true yoksa false döndürür.
. set.has(value) – Eğer öyle bir değer varsa true yoksa false döndürür.
. set.clear() – set’in içindeki her şeyi siler.
. set.size – eleman sayısını döndürür.

Örneğin, misafirlerimiz geliyor ve herkesi hatırlamak istiyoruz. Fakat ikinci defa gelenlerin tekrarlanmasını istemiyoruz. Bir ziyaretçinin sadece bir kez “sayılması” gerekiyor.

Set tam olarak ihtiyacımız olan şey: */

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// ziyaretler, bazıları birden çok kez gelmiş
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set sadece eşsiz değerler tutar
console.log(set.size); // 3

for (let user of set) {

    console.log(user.name);
}
// John
// Pete
// Mary

/* Kullanıcılardan oluşan bir dizi Sete alternatif olabilir ve arr.find kullanarak her ekleme yaparken aynısından var mı diye kontrol yapabiliriz. Fakat bu kodumuzun performansını azaltır. Çünkü bu metod ile her seferinde dizinin tüm elemanlarını kontrol etmemiz gerekir. Set eşsizlik kontrolü yapmak için daha iyi optimize edilmiştir. */