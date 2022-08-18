// Objeler genelde dünyada var olan şeyler gibidirler, kullanıcılar, emirler, vs.

let kullanici = {
    isim: "Nurcan",
    yas: 30
};

/* Kullanıcıların işlem yapma yetenekleri vardır: alışveriş sepeti, giriş, çıkış vs.
Bu aksiyonlar Javascript’te özellikler için fonksiyon kullanarak çözülür. */


// Metod Örnekleri
// Başlangıç olarak kullanici merhaba desin:

let kullanici2 = {
    isim: "İhsan",
    yas: 30
};

kullanici2.selamVer = function () {

    console.log("Merhaba");
};

kullanici2.selamVer(); // Merhaba

/* Burada Fonksiyon ifadesi ile fonksiyon yaratıldı ve kullanici.selamVer özelliğine atandı.
Ardından bu metod çağırıldı ve kullanıcı selam verdi.
Bir objenin özelliği olan fonksiyona metod denir.
Öyleyse kullanici objesinin selamVer metodu bulunmaktadır.
Tabii ki metodları önceden tanımlanmış fonksiyonlarla da oluşturabilirsiniz. Örneğin: */

let kullanici3 = {
    // ...
};

// önce tanımla
function selamVer() {

    console.log("Merhaba!");
};

// Sonra bunu metod olarak objeye ekle
kullanici3.selamVer = selamVer;

kullanici3.selamVer(); // Merhaba!


// Metod Kısayolu
// Metodları yaratmak için daha kolay bir kullanım mevcuttur:

// aşağıdaki objeler aynı işleri yapar.

let kullanici4 = {

    selamVer: function () {

        console.log("Merhaba");
    }
};

// kısa yolu daha güzel görünüyor değil mi?
let kullanici5 = {

    selamVer() { // "selamVer: function()" ile aynı

        console.log("Merhaba");
    }
};

/* Yukarıda da gösterildiği gibi "function" pas geçilerek sadece selamVer() yazılabilir.
Doğrusunu söylemek gerekirse iki fonksiyonda birbiri ile aynı. Altta yatan farklılık ise kalıtım ile alakalı ki bu da şimdilik bir sorun teşkil etmiyor. Çoğu durumda kısa yazım tercih edilmektedir. */