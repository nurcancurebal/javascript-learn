// delete operatörü ile bir özellik silinebilir:

let kullanici = {
    isim: "Nurcan",
    yas: 27
};

kullanici.adminMi = true;

delete kullanici.yas;

console.log(kullanici); // { isim: 'Nurcan', adminMi: true }