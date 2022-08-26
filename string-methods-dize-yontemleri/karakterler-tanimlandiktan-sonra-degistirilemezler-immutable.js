/* Karakterler tanımlandıktan sonra değiştirilemezler ( immutable )
JavaScript dilinde karakter dizisi değiştirilemez. Mümkün değildir.

Örnek ile açıklamak gerekirse: */

let str = 'Selam';

str[0] = 's'; // hata

console.log(str[0]); // S, çalışmaz, değişiklik olmaz

// Bunun çüzümü ise yeni bir karakter dizisi atayıp str'yi buna atamaktır.

str = str[0] + 'ELAM';  // karakter dizisini tamamen değiştir.

console.log(str); // SELAM