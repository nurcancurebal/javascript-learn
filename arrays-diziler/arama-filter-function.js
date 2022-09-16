/* filter
find metodu sadece fonksiyonu true yapan elemana bakar.

Birden fazlası için ise arr.filter(fn) kullanılabilir.

Yazımı neredeyse find ile aynıdır, fakat tek bir eleman yerine kurala uyan elemanları dizi halinde döner. */

let results = arr.filter(function (eleman, index, dizi) {

    // eğer elemanlar filtreye uygunsa true döndürür.
});


let kullanicilar = [
    { id: 1, isim: "Ahmet" },
    { id: 2, isim: "Muzaffer" },
    { id: 3, isim: "Emine" }
];

// ilk iki kullaniciyi döndürür.
let baziKullanicilar = kullanicilar.filter(eleman => eleman.id < 3);

console.log(baziKullanicilar.length); // 2