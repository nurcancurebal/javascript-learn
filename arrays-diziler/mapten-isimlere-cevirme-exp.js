/* Map'ten isimlere çevirme.

kullanici objelerinden oluşan bir dizinin kullanici.adi özelliğinden dizi yapan kodu yazınız.

let ahmet = { adi: "Ahmet", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let muzaffer = { adi: "Muzaffer", yas: 28 };

let kullanici = [ahmet, mehmet, muzaffer];

let isimler = /* ... kodunuz */

// console.log(isimler); // [ 'Ahmet', 'Mehmet', 'Muzaffer' ] */


let ahmet = { adi: "Ahmet", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let muzaffer = { adi: "Muzaffer", yas: 28 };

let kullanici = [ahmet, mehmet, muzaffer];

let isimler = kullanici.map(eleman => eleman.adi);

console.log(isimler); //  [ 'Ahmet', 'Mehmet', 'Muzaffer' ]