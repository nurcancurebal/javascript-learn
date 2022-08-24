/* JavaScript’te tüm sayılar 64-bit formatında tutulur IEEE-754, buna “double precision” da denir.

Sayılar ile ilgili bilinenlerin üzerinden tekrar geçecek olunursa.

Sayıyı yazmanın birçok yolu
Diyelim ki 1 milyar yazmak istiyorsunuz. Şu şekilde: */

let milyar = 1000000000;

console.log(milyar); // 1000000000

/* Fakat gerçek hayatta bu kadar 0 yan yana yazdığınızda karışma şansı olduğundan bunun yerine 1milyar veya 7.3milyar gibi
yazılabilmektedir. Aynı özellik JavaScript için de geçerli. Fakat bu defa sayıdaki 0 sayısı "e" ile birlikte
kullanılmalıdır: */

let milyar2 = 1e9;  // 1 milyar 1 ve 9 sıfırdan oluşmaktadır.

console.log(milyar2); // 1000000000

console.log(7.3e9);  // 7300000000 , 7.3 milyar (7,300,000,000)

/* 
1e3 = 1 * 1000
1.23e6 = 1.23 * 1000000 */

// Çok küçük bir sayıya bakıldığında. Örneğin 1 mikrosaniye ( saniyenin milyonda 1’i):

let ms = 0.000001;

console.log(ms); // 0.000001

// Aynı şekilde "e" yardımcı olabilir. 0 ları yazmak yerine :

let ms2 = 1e-6; // 1'in soluna 6 tane 0

console.log(ms2); // 0.000001

// Şeklinde tanımlayabilirsiniz. 0.000001 gördüğünüz gibi 6 tane sıfır bulunmaktadır. Bundan dolayı 1e-6 şeklinde yazılabilir.

// -3 demek 1'in yanında 3 tane sıfır koy ve sayıyı böl.
// 1e-3 = 1 / 1000 (=0.001)

// -6 demek 1'in yanına 6 tane sıfır koy ve sayıyı böl.
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)