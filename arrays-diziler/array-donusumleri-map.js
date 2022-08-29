/* map
arr.map metodu en fazla kullanılan ve kullanışlı olan metodlardandır. */


let sonuc = arr.map(function (eleman, index, dizi) {
    
    // eleman yerine yeni değer döndürür.
})

/* Dizinin her elemanı için fonksiyonu çalıştırır ve sonuçlarını dizi olarak döner.

Örneğin elemanların uzunlukları ile ilgili bir değişiklik yapılabilir: */

let uzunluklar = ["Bilbo", "Gandalf", "Nazgul"].map(eleman => eleman.length);

console.log(uzunluklar); // 5,7,6