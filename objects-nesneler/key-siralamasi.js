// Objeler sıralı mıdır? Diğer bir deyişle; eğer döngü içerisinde obje yazdırılırsa bu objeye yerleştirme sırasına göre mi
// yazılır? Kısa cevap: “özel bir şekilde sıralanır”. Eğer tam sayı ise değerlerine göre, tam sayı değil ise türlü objeye
// eklenme sırasına göre sıralanır.

let kodlar = {
    "49": "Almanya",
    "41": "İsveç",
    "44": "İngiltere",
    // ...,
    "1": "Amerika Birleşik Devletleri"
};

for (let kod in kodlar) {

    console.log(kod); // 1, 41, 44, 49
}

// Bu obje belki açılan kutu içerisinde kullanılacaktı, Alman kullanıcılar düşünülerek yapılmış olabilir. Onun için Almanya
// birinci sıraya konulmuş fakat gördüğünüz üzere anahtar 49 olduğundan ilk değil de sonuncu sırada.
/* 
Kodu çalıştırdığınızda:
Amerika Birleşik Devletleri 1. sırada
Sonra İsveç vs.
Telefon kodları tam sayı olduğundan dolayı bu sıraya göre dizilmişlerdir.
Özellik anahtarları nasıl tam sayı olabilir ?
Burada “tam sayı” aslında sayı tipinde değil de karakter tipinde sayı olmakta. Sıralama yapılacağı sırada sayısal olarak
çevriliyor ve buna göre sıralanıyor.
…Diğer yandan, eğer anahtarlar tam sayı değilse bu durumda objeye eklenme sırasına göre çıktı alınır: */

let kullanici = {
    isim: "Nurcan",
    soyisim: "Cürebal"
};

kullanici.yas = 27; // yeni bir özellik ekledik

// tam sayı olmayan anahtarlar objeye eklenme sırasına göre gelir.

for (let ozellik in kullanici) {

    console.log(ozellik); // isim, soyisim, yas
}

// Peki telefon kodları (tam sayı değerleri) nasıl eklenme sırasına göre kullanılabilir? Bunun için her koddan önce "+"
// işaretini kullanmak yeterli olacaktır.


let kodlarTwo = {
    "+49": "Almanya",
    "+41": "İsveç",
    "+44": "İngiltere",
    // ..,
    "+1": "Amerika Birleşik Devletleri"
};

for (let kod in kodlarTwo) {

    console.log(+kod); // 49, 41, 44, 1
}