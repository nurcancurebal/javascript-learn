/* Ordu fonksiyonları

Aşağıdaki kod nisancilar dizisi olusturmaktadır.

Her fonksiyon kendi numara çıktısını verir. Fakat bir hata var… */

function orduYap1() {

    let nisancilar = [];
    let i = 0;

    while (i < 10) {

        let nisanci = function () { // Nişancılar fonksiyonu

            console.log(i); // 10, 10
        };

        nisancilar.push(nisanci);
        i++;
    }

    return nisancilar;
}

let ordu1 = orduYap1();

ordu1[0](); // nisanci 0 fakat 10 gösteriyor.
ordu1[5](); // nisancı 5 fakat yine 10 gösteriyor.
// ... tüm nişancılar kendi numaraları yerine 10 gösteriyorlar. Neden tüm nişancılar aynı? Kodu olması gerektiği duruma getiriniz.

// çözüm

// 1. Boş nisancilar dizisi yaratır.
let nisancilar = [];

/*2. nisancilar.push(function..) döngüsü ile doldurur.

Her bir elemanı fonksiyondur, buna göre sonuç dizisi aşağıdaki gibi olacaktır: */

nisancilar = [
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); },
    function () { console.log(i); }
];

/* 3. En nihayetinde dizi fonksiyondan döner.

Sonrasında ordu[5]() çalıştığında diziden ordu[5] elemanı alınır ( fonksiyon olacaktır ) ve çağırılır.

Peki neden tüm fonksiyonlar aynı şeyi gösterir?

Bunun nedeni nisancilar fonksiyonunun içinde i değişkeninin olmamasıdır. Böyle bir i fonksiyonu çağırıldığında i değeri dış ortamdan alınır.

Yine kaynak koda bakılacak olursa: */

function orduYap2() {
    //...
    let i = 0;

    while (i < 10) {

        let nisanci = function () { // nisanci fonksiyonu

            console.log(i); // numarayı yazmalı
        };
        //...
    }
    //...
}

/* …Sizin de görebilecğeiniz gibi orduYap() ile aynı sözcüksel ortamda bulunmaktadır. Fakat ordu[5]() çağırıldığında, orduYap() işini bitirmiş ve son değeri olan 10'u almış oluyor.( while'ın sonu 10 olmaktadır.)
Sonuç olarak tüm nisanci fonksiyonları dış sözcüksel ortamdan i=10 değerini alırlar.

Bu basit bir şekilde düzeltilebilir: */

function orduYap3() {

    let nisancilar = [];

    for (let i = 0; i < 10; i++) {

        let nisanci = function () {

            console.log(i); // 0, 5
        };

        nisancilar.push(nisanci);
    }

    return nisancilar;
}

let ordu3 = orduYap3();

ordu3[0](); // 0
ordu3[5](); // 5

/* Şimdi doğru çalışmaktadır çünkü for(...){...} bloğu her çalıştığında yeni bir Sözcüksel Ortam yaratılır ve o ortama ait i değeri tanımlanır.

Artık i değeri daha yakındır. orduYap() Sözcüksel Ortamından ayrılmışır, döngünün her adımında kendine has bir Sözcüksel Çevreye sahiptir. Her bir nisanci'da yaratıldığı ortamdaki değerlere bakar.


while döngüsünü for'a çevirerek bu problemi çözmüş olduk.

Bunu sağlayan başka bir yöntem daha vardır: */

function orduYap4() {

    let nisancilar = [];

    let i = 0;

    while (i < 10) {

        let j = i;

        let nisanci = function () {

            console.log(j); // 0, 5
        };

        nisancilar.push(nisanci);

        i++;
    }

    return nisancilar;
}

let ordu4 = orduYap4();

ordu4[0](); // 0
ordu4[5](); // 5

/* while döngüsü değişkendi fakat for döngüsünde olduğu gibi değerler her döngüde oluşan Sözcüksel Ortama atanacak şekilde ayarlandı. Böylece her nisanci çağırıldığında doğru değeri alması garantilendi.

let j = i ile i nin yerel bir kopyasını oluşturmuş olduk. İlkel değişkenler “değer ile” kopyalandığından dolayı artık i den tamamen farklı bir değişkene sahip olduk. */