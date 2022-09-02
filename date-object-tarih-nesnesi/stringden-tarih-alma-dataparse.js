/* -> Karakter dizisinden Date.parse ile tarih alma.
Date.parse(str) metodu karakterden tarih ayrıştırmaya yarar.

Metin formatı: YYYY-MM-DDTHH:mm:ss.sssZ şeklindedir, burada :

YYYY-MM-DD – tarih : yıl-ay-gün
"T" karakteri ayraç.
HH:mm:ss.sss – zaman: saat:dakika:saniye.sarise şeklindedir.
İsteğe bağlı olarak eklenen 'Z' +-hh:mm şeklinde UTC’ye göre zaman ayarlamaya yarar. Varsayılan Z değeri UTC+0 anlamına gelir.
Daha kısa YYYY-MM-DD veya YYYY-MM hatta YYYY gibi şeklinde bile olabilir.

Date.parse(str) çağrısı verilen formatta karakterleri alır ve timestamp( 1 Ocak 1970 UTC+0’dan itibaren geçen sarise ) olarak geri döner. Eğer format doğru değilse, NaN döner.

Örneğin: */

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)

console.log(typeof ms); // number


// Zaman damgasından (timestamp) new Date objesi yaratılabilir.

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

console.log(date); // 2012-01-26T20:51:50.417Z

console.log(typeof date); // object