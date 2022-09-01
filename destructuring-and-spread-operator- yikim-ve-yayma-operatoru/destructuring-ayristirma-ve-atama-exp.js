/* Ayrıştırma ve atama

Aşağıdaki gibi bir obje: */

let kullanici = {
    adi: "Erdinç",
    yasi: 30
};

/* Ayrıştırmasını şu şekilde tanımlayınız:

adi özelliği ismi değişkenine atanacak.
yasi özelliği yili değişkenine atanacak.
adminMi özelliği adminMi değişkenine atanacak, eğer bu özellik yoksa false kabul edilecek.
Değişkenler atandıktan sonra: */

// sol tarafta yazacağınız kod:
// ... = kullanici

/* 
console.log(ismi); // Erdinç
console.log(yili); // 30
console.log(adminMi); // false */

// çözüm

let kullanici2 = {
    adi: "Nurcan",
    yasi: 27
};

let { adi: ismi, yasi: yili, adminMi = false } = kullanici2;

console.log(ismi); // Nurcan
console.log(yili); // 27
console.log(adminMi); // false
console.log(kullanici2); // { adi: 'Nurcan', yasi: 27 }