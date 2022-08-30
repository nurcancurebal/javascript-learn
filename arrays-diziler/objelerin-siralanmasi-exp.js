/* name özelliğine sahip obje dizisini alan ve sortByName(kullanicilar) sıralayan fonksiyonu yazınız.

Örneğin:

let muzaffer = { adi: "Muzaffer", yas: 25 };
let mehmet = { adi: "Mehmet",yas: 30 };
let ahmet = { adi: "Ahmet", yas: 28 };


let arr = [   muzaffer , mehmet, ahmet ];

sortByName(arr);

şimdi: [ahmet, mehmet, muzaffer]

console.log(arr[1].adi) // Mehmet

çözüm */

function sortByName(arr) {

    arr.sort((a, b) => a.adi > b.adi);
}

let muzaffer = { adi: "Muzaffer", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let ahmet = { adi: "Ahmet", yas: 28 };

let arr = [muzaffer, mehmet, ahmet];

sortByName(arr);

// şimdi: [ahmet, mehmet, muzaffer]
console.log(arr[1].adi) // Mehmet