/* JSON metodları, toJSON
Diyelimki karmaşık bir yapı var, bunu karakter dizisine çevirip ağ üzerinden loglanması için başka bir yere iletilmek isteniyor.

Doğal olarak, bu karakter dizisi tüm önemli özellikleri içermeli

Bu çevirim şu şekilde yapılabilir: */

let kullanici = {

  adi: "Nurcan",
  yasi: 30,
  toString() {

    return `{adi: "${this.adi}", yasi: ${this.yasi}}`;
  }
};

console.log(kullanici); // { adi: 'Nurcan', yasi: 30, toString: [Function: toString] }

/* … Fakat geliştirme esnasında yeni özellikler eklendi ve öncekiler ya silindi ya da isim değiştirdi. Böyle bir durumda toString metoduyla her zaman değişiklik yapmak oldukça zordur. Özellikleri döngüye sokup buradan değerler alınabilir. Bu durumda da iç içe objelere ne olacak? Bunlarında çevirimlerini yapmak gerekir. Ayrıca ağ üzerinden objeyi göndermeye çalıştığınızda ayrıca bu objenin alan yer tarafından nasıl okunacağına dair bilgi göndermek zorundasınız.

Neyseki bunların hiçbiri için kod yazmaya gerek yok. Bu problem bizim için çözülmüş durumda. */

/* JSON.stringify
JSON (JavaScript Object Notation) genelde objelerin değerlerini ifade eder.RFC 4627 standardında tanımı yapılmıştır. Öncelikle JavaScript düşünülerek yapılmış olsa da birçok dil de kendine has kütüphanelerle JSON desteği vermektedir. Böylece client JavaScript kullanırken server Ruby/PHP/Java/Herneyse… kullansa bile JSON kullanımında bir sorun oluşturmaz.

JavaScript aşağıdaki metodları destekler:

. JSON.stringify objeyi JSON’a çevirir.
. JSON.parse JSON’dan objeye çevirmeye yarar.

Örneğin, aşağıda JSON.stringify metodu ögrenci objesi için kullanılmıştır: */

let ogrenci = {
  adi: 'Ahmet',
  yasi: 30,
  adminMi: false,
  dersler: ['html', 'css', 'js'],
  esi: null
};

let json = JSON.stringify(ogrenci);

console.log(typeof json); // string, dönecektir.!

console.log(json);
/* JSON'a çevirilmiş obje:
{
  "adi": 'Ahmet',
  "yasi": 30,
  "adminMi": false,
  "dersler": ['html', 'css', 'js'],
  "esi": null
} */

/* JSON.stringify(ogrenci) metodu objeyi alır ve bunu karaktere çevirir, buna Json-kodlanmış , seri hale getirilmiş veya karakter haline getirilmiş denir. Bunu ağ üzerinden karşı tarafa göndermek veya basit bir şekilde kaydetmek mümkündür.

JSON kodlanmış objenin normal obje ile arasında bir kaç tane önemli farklılık vardır:

. Karakterler çift tırnak kullanır. JSON’da tek tırnak veya ters tırnak kullanılmaz. Bundan dolayı 'Ahmet' → "Ahmet" olur.
. Obje özelliklerinin isimleri de çift tırnak içinde alınır. Bu da zorunludur. Bundan dolayı yas:30 , "yas":30 olur.
JSON.stringify ilkel tiplere de uygulanabilir.

Desteklenen JSON tipleri:

. Objeler { ... }
. Diziler [ ... ]
. İlkel Tipler:
-karakterler,
-sayılar,
-boolean değerler true/false,
-null. */

// Örneğin:

// normal bir sayı JSON için de normal bir sayıdır.
console.log(JSON.stringify(1)) // 1

// karakterler de JSON içinde karakterdir fakat çift tırnak içinde gösterilir.
console.log(JSON.stringify('test')) // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

/* JSON sadece veriyi tanımlayan diller arası bir şartname bulunmaktadır. Bundan dolayı Javascript’e özel obje özelliklerikleri JSON.stringify tarafından pas geçilir.

Yani:

. Fonksiyon özellikleri ( metodlar ).
. Sembolik özellikler.
. undefined'ı saklayan özellikler. */

let kullanici2 = {

  merhaba() { // ihmal edilir

    console.log("Merhaba");
  },

  [Symbol("id")]: 123, // ihmal edilir

  baska: undefined // ihmal edilir
};

console.log(JSON.stringify(kullanici2)); // {}, (boş obje)

/* Bu özellik kabul edilebilir. Eğer istediğiniz bu değilse, bu işlemi nasıl özelleştirebilirsiniz bunu göreceksiniz.

Harika olan ise iç içe objeler otomatik olarak çevrilir.

Örneğin: */

let tanisma = {
  baslik: "Konferans",
  oda: {
    sayi: 123,
    katilimcilar: ["ahmet", "mehmet"]
  }
};

console.log(JSON.stringify(tanisma));
/* tüm yapı karakter şekline çevrildi:
{"baslik":"Konferans","oda":{"sayi":123,"katilimcilar":["ahmet","mehmet"]}} */

/* Önemli bir sınırlama: Dairesel referans olmamalıdır.

Örneğin: */

let oda = {
  sayi: 23
};

let tanisma2 = {
  baslik: "Konferans",
  katilimcilar: ["ahmet", "mehmet"]
};

tanisma2.yeri = oda;       // tanisma2 odaya referans veriyor.

oda.dolduruldu = tanisma2; // oda tanisma2 ye referans veriyor

//* JSON.stringify(tanisma2); // Hata: Dairesel yapı JSON'a çevrilememiştir.

// Çeviri yapılırken hata olmasının nedeni: oda.dolduruldu tanisma'ya referans olurken. tanisma.yeri oda'ya referans verir.