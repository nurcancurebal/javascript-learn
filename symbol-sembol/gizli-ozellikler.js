/* “Gizli” Özellikler
Semboller objelere “gizli” özellikler eklenmesinin yolunu açar, bunlar vasıtasıyla kodun başka bir bölgesindeki değişiklik var olan objenin üzerine yazamaz. */

// Örneğin, kullanici objesi için “id” özelliği şu şekilde tanımlanabilir:

let kullanici1 = { isim: "Erdinç" };
let id1 = Symbol("id");

kullanici1[id1] = "ID değeri";

console.log(kullanici1[id1]); // ID değeri
//Sembolü bu şekilde anahtar olarak kullanarak kullanici objesine erişilebilir.

/* Peki Symbol("id")'nin karakter dizisi "id"'ye olan üstünlüğü nedir?
Bunu anlamak için örneği biraz daha genişletmek gerekirse;
Başka bir kodun kullanici içerisinde id özelliği eklemek istediğini farzedin. Bu belki başka bir JavaScript kütüphanesi olabilir. Doğal olarak sizin yaptığınız değişiklikten hiç haberi yoktur.
O kod parçası kendi id'sini Symbol("id") şeklinde yaratabilir: */

// ...
let id2 = Symbol("id");

kullanici1[id2] = "Id değeri";

/* Artık birbiri ile hiçbir ayrılık olmayacaktır, hatta aynı isme sahip olsalar bile.
Şimdi bu "id"'nin karakter dizisi olduğunu varsayın, eğer başkası aynı isim ile id objeye veri eklemeye çalışırsa bu durumda ayrılık olacaktır. */

let kullanici3 = { isim: "Nurcan" };

// `id` özelliğine veri eklendi
kullanici3.id3 = "ID Değeri";

// Ardından kodun başka bir yerinde `id` başka bir amaçla kullanılırsa

kullanici3.id3 = "Başka id değeri"
// boom! üstüne yazıldı! Aslında daha öncekinin üzerine yazılmak istenmemişti, ama oldu!

/* Obje Tanımında Semboller
Eğer obje tanımlanırken sembol doğrudan yazılmak istenirse, köşeli parantez gerekmektedir.
Aşağıdaki Gibi: */

let id4 = Symbol("id");

let kullanici4 = {
    isim: "Bal",
    [id4]: 123 // dikkat ederseniz id:123 değil
};

// Böyle yazılmasının nedeni, id değişkeninin ismi değil değerinin istenmesidir, bu değer karakter dizisi değildir.


/* Semboller for…in’de pas geçilir.
Obje içindeki semboller obje döngüsü içinde pas geçilir. */

let id5 = Symbol("id");
let kullanici5 = {
    isim: "John",
    yas: 30,
    [id5]: 123
};

for (let key in kullanici5) {

    console.log(key);
}  // isim, yas (sembol yok)

// Sembole doğrudan aşağıdaki gibi erişilebilir.

console.log("Doğrudan: " + kullanici5[id5]); // Doğrudan: 123

/* Bu da “gizleme” konseptine dahildir. Diğer bir kütüphane veya kod parçası yanlışlıkla bizim gizlediğimiz bir özelliğin üzerine yazmasın diye. */


// Buna karşın Object.assign hem karakter değerlerini hem de sembolleri kopyalar:

let id6 = Symbol("id");
let kullanici6 = {
    [id6]: 123
};

let klon = Object.assign({}, kullanici6);

console.log(klon[id6]); // 123

/* Burada problem yoktur. Dizaynında. Amaç yeni bir obje yaratıp istenilen objenin tüm alanlarının bu yeni objeye kopyalanmasından ibarettir. Buna elbette id alanı da dahildir. */


/* Diğer tipler karakter dizisine çevrilir
Obje içinde anahtarlar sadece karakter dizisi veya sembol olabilirler. Diğer tipler doğrudan karakter dizisine çevrililer.
Örneğin 0 değeri obje içerisinde anahtar olarak "0" karakter olan sıfıra dönüşmektedir. */

let obj = {
    0: "test" // bu aynı "0": "test"
};

// `console.log`'de aynı şekilde verilen özelliği karaktere çevirip kullanır.
console.log(obj["0"]); // test
console.log(obj[0]); // test (aynı özellik)