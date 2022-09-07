/* Fonksiyon Objeleri, NFE
Bildiğiniz gibi JavaScript’te fonksiyonlar değerdir.

Her değerin bir tipi vardır.
JavaScript’te fonksiyon bir objedir.

Daha iyi görselleyebilmek adına fonksiyonlara “aksiyon objeleri” denebilir. Sadece çağırarak değil, obje olarak da davranabilirsiniz: özellik ekleme çıkarma, referans paslama vs.


-> “name” özelliği
Fonksiyon objelerinin kullanışlı özellikleri bulunmaktadır.

Örneğin, fonksiyonun ismi “name” özelliği ile alınabilir. */

function selamVer() {

  console.log("Selam");
}

console.log(selamVer.name); // selamVer

// “name” özelliği atama o kadar akıllıdır ki, fonksiyon tanımlama ifadelerindeki ismi bile doğru alır.

let selamVer = function () {

  console.log("Selam");
}

console.log(selamVer.name); // selamVer

// Hatta atama varsayılan değer ile yapıldığında bile çalışır:

function f(selamVer = function () { }) {

  console.log(selamVer.name); // selamVer (çalıştı!)
}

f();

/* Tanımda bu özelliğe “bağlamsal isim” denir. Eğer fonksiyonda böyle bir şey yoksa, tanımlama bunu içerikten alır.

Nesne metodlarının da isimleri vardır: */

let kullanici = {

  selamVer() {
    // ...
  },

  yolcuEt: function () {
    // ...
  }

}

console.log(kullanici.selamVer.name); // selamVer
console.log(kullanici.yolcuEt.name); // yolcuEt

/* Burada bir sihir yoktur. İsmin çıkarılamadığı birçok durum meydana gelebilir.

Böyle durumlarda aşağıdaki gibi boş dönerler: */

// Dizinin içerisinde fonksiyon yaratılması
let arr = [function () { }];

console.log(arr[0].name); // <boş>
// motorun doğru ismi bulmasına imkan yok bundan dolayı boş dönüyor.
// Pratikte çoğu fonksiyonun ismi bulunmaktadır.