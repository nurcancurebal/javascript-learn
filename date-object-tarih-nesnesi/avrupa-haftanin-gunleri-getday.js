/* Avrupa Haftanın Günleri

Avrupa devletlerinde hafta pazartesinden başlar ( pazartesi 1, salı 2, pazar 7 yani 0 gibi ). yerelGunAl(tarih) adında bir fonksiyon yazın ve bu fonksiyon tarih objesinin haftanın hangi gününe denk geldiğini dönsün.

let tarih = new Date(2012, 0, 3);  // 3 Ocak 2012

console.log( yerelGunAl(tarih) );       // salı,2 dönmeli

çözüm */

function yerelGunAl(tarih) {

    let gun = tarih.getDay();

    if (gun == 0) { // 0 -> 7 olmakta. // Eğer normal haftanın günü 0 ( pazar ) ise bu avrupa takvimine göre 7 olmakta.

        gun = 7;
    }

    return gun;
}

console.log(yerelGunAl(new Date(2012, 0, 3))); // 2