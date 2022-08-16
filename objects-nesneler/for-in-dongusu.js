//Objenin içindeki anahtarlar içini adım adım gezen for..in döngüsü bulunmaktadır. Bu for(;;) döngüsünden tamamen farklıdır.


// for (anahtar in object) {
// her anahtar için döngü gövdesini çalıştırır.
// }

let kullanici = {
    isim: "Nurcan",
    yas: 27,
    evliMi: true
};

for (let anahtar in kullanici) {

    console.log(anahtar);  // isim, yas, evliMi

    console.log(kullanici[anahtar]); // Nurcan, 27, true
}
// Dikkat ederseniz, “for” yapısına göre döngü içerisinde let anahtar tanımı yapılabilir.
//Elbette anahtar yerine istediğiniz herhangi bir değişken ismini koyabilirsiniz.Örneğin key veya property