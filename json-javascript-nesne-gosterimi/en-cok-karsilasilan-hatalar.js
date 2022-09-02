// Aşağıda elle yazılan JSON’da en çok karşılaşılan hatalar sıralanmıştır. ( Bazen test etme amaçlı elle JSON yazılabilir)

let json = `{
  adi: "Ahmet",                     // hata: İki tırnak olmadan anahtar yazmak
  "soyadi": 'Güngör',               // hata: Değerde tek tırnak kıllanılmıştır. Bu çift tırnak olmalı
  'admin': false                  // hata: Anahtar için tek tırnak kullanılmıştır.
  "dogumGunu": new Date(2000, 2, 3), // hata: "new" değeri kabul edilmez, sadece değer girilmelidir.
  "friends": [0,1,2,3]              // hata yok!
}`;

/* Bunun yanında JSON yorumlara izin vermez. Yorum eklenirse JSON çalışmaz hale gelir.

JSON5 adında farklı bir format bulunmaktadır. Bu format tırnaksız yazıma ve yorumlara izin vermektedir. Fakat bu ayrı bir kütüphanedir ve JSON’un şartnamesinde bulunmamaktadır.

JSON’un daha sıkı yazıma sahip olmasının nedeni geliştiricilerinin tembel olması vs değildir. Asıl amaç çok daha hızlı ayrıştırma algoritması uygulayabilmektir. */