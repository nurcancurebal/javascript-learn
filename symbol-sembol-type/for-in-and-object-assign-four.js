/*
Semboller for…in’de pas geçilir.
Obje içindeki semboller obje döngüsü içinde pas geçilir. */

let id = Symbol("id");

let kullanici = {
    isim: "John",
    yas: 30,
    [id]: 123
};

for (let key in kullanici) {

    console.log(key);
}  // isim, yas (sembol yok)

// Sembole doğrudan aşağıdaki gibi erişilebilir.

console.log("Doğrudan: " + kullanici[id]); // Doğrudan: 123

/* Bu da “gizleme” konseptine dahildir. Diğer bir kütüphane veya kod parçası yanlışlıkla bizim gizlediğimiz bir özelliğin üzerine yazmasın diye. */


// Buna karşın Object.assign hem karakter değerlerini hem de sembolleri kopyalar:

let id6 = Symbol("id");

let kullanici6 = {
    [id6]: 123
};

let klon = Object.assign({}, kullanici6);

console.log(klon[id6]); // 123

/* Burada problem yoktur. Dizaynında. Amaç yeni bir obje yaratıp istenilen objenin tüm alanlarının bu yeni objeye kopyalanmasından ibarettir. Buna elbette id alanı da dahildir. */