/* “Gizli” Özellikler
Semboller objelere “gizli” özellikler eklenmesinin yolunu açar, bunlar vasıtasıyla kodun başka bir bölgesindeki değişiklik var olan objenin üzerine yazamaz. */

// Örneğin, kullanici1 objesi için “id1” özelliği şu şekilde tanımlanabilir:

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

console.log(kullanici1[id2]);  // Id değeri


/* Artık birbiri ile hiçbir ayrılık olmayacaktır, hatta aynı isme sahip olsalar bile("id").
Şimdi bu "id"'nin karakter dizisi olduğunu varsayın, eğer başkası aynı isim ile id objeye veri eklemeye çalışırsa bu durumda ayrılık olacaktır. */

let kullanici3 = { isim: "Nurcan" };

// `id3` özelliğine veri eklendi
kullanici3.id3 = "ID Değeri";

// Ardından kodun başka bir yerinde `id3` başka bir amaçla kullanılırsa
kullanici3.id3 = "Başka id değeri"

// boom! üstüne yazıldı! Aslında daha öncekinin üzerine yazılmak istenmemişti, ama oldu!

console.log(kullanici3.id3); // Başka id değeri