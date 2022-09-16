/* Objelerden oluşma bir dizinin olduğunu varsayın. Bazı şartları sağlayan objeleri nasıl bulursunuz.

Burada arr.find metodu yararlı olur.

Yazımı: */

let result = arr.find(function (elaman, index, dizi) {

    //  eğer aranan eleman bulunursa true döndürmeli.
});

/* Bu fonksiyon her eleman için tekrar tekrar çağırılır.

elaman eleman’ı tanımlar.
index indeks’i tanımlar.
array dizinin kendisidir.
Eğer true döndürür ise arama durur ve eleman'ın kendisi döner. Eğer bulunamazsa undefined döndürülür.

Örneğin, kullanıcıların bulunduğu bir dizi ve her dizide id ve isim alanları bulunsun. id == 1 olan elemanı bulalım. */

let kullanicilar = [
    { id: 1, isim: "Ahmet" },
    { id: 2, isim: "Muzaffer" },
    { id: 3, isim: "Emine" }
];

let kullanici = kullanicilar.find(eleman => eleman.id == 1);

console.log(kullanici.isim); // Ahmet

/* Objelerin dizi içerisinde yer alması çokça karşılaşılan bir olaydır, bundan dolayı find metodu çok kullanışlıdır.

Dikkat ederseniz find metodunda sadece bir tane argüman kullanılmıştır item => item.id == 1. find metodunun diğer parametreleri çok nadir olarak kullanılır.

arr.findIndex metodu da aynı find metodu gibi çalışır fakat elemanın kendi yerine index'ini döndürür. */