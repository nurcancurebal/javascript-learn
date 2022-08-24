/* toString(taban)
num.toString(base) verilen tabana göre karakter dizisini döndürür. */

let sayi = 255;

console.log(sayi.toString(16));  // ff
console.log(sayi.toString(2));   // 11111111

/* taban 2 ile 36 arasında değişebilir. Varsayılanı 10dur.

Genel olarak kullanımı şu şekildedir:

16-tabanı hex renkler için, karakter çevrimleri için kullanılır. 0..9 ve A..F arası kullanılabilir.

2-tabanı bit tipindeki uygulamalar için kullanılır. Sadece 0 veya 1'dir değerlerini alabilir.

36-tabanı maximum bir basamak 0..9 veya A..Z arası kullanılabilir. Bu da demek oluyor ki bütün latin alfabesi sayıları
tanımlamak için kullnılabilir. Bu uzun sayısal bir değeri daha kısa bir değee çevirmek istendiğinde kullanılabilir. Örneğin
URL kısaltma kolay bir şekilde 36-taban'nda ifade edilebilir. */

console.log(123456..toString(36)); // 2n9c

/* -> İki nokta ile metod çağırımı
.. şeklinde yazım, hatalı bir yazım değildir. Eğer sayı üzerinden doğrudan metod çağırılmak isteniyor ise .. yazımı
kullanılıri
Eğer tek nokta olursa:123456.toString(36) hata meydana gelir. Çünkü tek nokta olduğunda JavaScript ondalık sayı olarak
algılar ve hata verir. Fakat bir tane daha nokta koyulursa JavaScript ondalık sayı olmadığını anladar ve doğrudan metoda
gider.
Şu şekilde de yazılabilir: */

console.log((123456).toString(36)); // 2n9c