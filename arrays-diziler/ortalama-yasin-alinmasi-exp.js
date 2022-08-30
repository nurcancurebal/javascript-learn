/* Ortalama yaşın alınması

ortalamaYasAl(kullanicilar) adında bir fonksiyon alınız. Bu fonksiyon yas ozelliğine sahip objelerden oluşan bir dizi alsın ve bunların ortalamasını hesaplasın.

Ortalama formülü (yas1 + yas2 + ..... + yasN) / N

Örneğin: */

let muzaffer1 = { adi: "Muzaffer", yas: 25 };
let mehmet1 = { adi: "Mehmet", yas: 30 };
let ahmet1 = { adi: "Ahmet", yas: 29 };

let arr1 = [muzaffer1, mehmet1, ahmet1];

console.log(ortalamaYasAl(arr1)); // (25+30+29)/3 = 28

// çözüm

function ortalamaYasAl(kullanicilar) {

    return kullanicilar.reduce((onceki, kullanici) => onceki + kullanici.yas, 0) / kullanicilar.length;
}

let muzaffer = { adi: "Muzaffer", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let ahmet = { adi: "Ahmet", yas: 29 };

let arr = [muzaffer, mehmet, ahmet];

console.log(ortalamaYasAl(arr)); // 28