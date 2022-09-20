/* -> Tüm özellikleri alma
Bir objeden Anahtar/değer ikilisini almak için birçok yol bulunmaktadır.

Aşağıdaki kullanımını zaten biliyorsunuz:

. Object.keys(obj) / Object.values(obj) / Object.entries(obj) – kendi adı/değerleri/anahtar-değer ikilileri şeklinde döngü yapılabilir. Metodları sadece enumerable ( döngülenebilir ) ve anahtarları karakter dizisi olanlar .

Eğer sembolik özellikler istenirse:
. Object.getOwnPropertySymbols(obj) – kendi sembolik özellik isimlerini döndürür.

Eğer döngülenemez özellikleri istenirse:
. Object.getOwnPropertyNames(obj) – kendine ait tüm karakter dizisi özellikleri dizi olarak döner.

Eğer tüm özellikler istenir ise:
. Reflect.ownKeys(obj) – kendine ait tüm karakter dizisi özellikleri dizi olarak döner…

Bu metodlar hangi özellikleri döndürecekleri hususunda farklılıkları olsa da hepsi objenin kendi üzerinde çalışır. Prototipte bulunan özellikler listelenmez.

for..in döngüsü ise biraz farklıdır: Kalıtılmış özellikler’i de döngüye alır. */

let animal1 = {

    eats: true
};

let rabbit1 = {

    jumps: true,
    __proto__: animal1
};

// Sadece kendi anahtarları
console.log(Object.keys(rabbit1)); // [ 'jumps' ]

// kalıtılmış anahtarları da içerir.
for (let prop in rabbit1) console.log(prop); // jumps, eats

/* Eğer kalıtılmış özellikler ayrıştırılmak istenirse bunun için var olan obj.hasOwnProperty(key) kullanılabilir: Eğer obj key adında kalıtımsal olmayan bir özelliğe sahipse true dönderir.

Kalıtımsal özellikleri bu şekilde filtreleyebilir veya başka bir şey yapabiliriz: */

let animal = {

    eats: true
};

let rabbit = {

    jumps: true,
    __proto__: animal
};

for (let prop in rabbit) {

    let isOwn = rabbit.hasOwnProperty(prop);

    console.log(`${prop}: ${isOwn}`); // jumps:true, eats:false
}

/* Şu şekilde kalıtım zinciri oluşmuştur: rabbit, sonra animal ve en son Object.prototype ( çünkü animal tam objedir {…} ), sonra bunun üzerine null:

Object.prototype.hasOwnPropery, diğer bir deyişle kalıtılmış.

… Fakat öyleyse neden for..in içerisinde görünmüyor. Halbuki for..in ile kalıtılmış tüm özelliklerin listeleneceğini söylemiştik. Aslında cevap basit, bu döngüye alınamaz. Tıpkı diğer Object.prototype'larda olduğu gibi. Bundan dolayı listelenmemiştir. */