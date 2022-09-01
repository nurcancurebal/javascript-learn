/* -> Tarih bileşenlerine erişim
Date objesinde yıla, aya vs. erişim için birçok metod bulunmaktadır. Fakat bunlar kaegorilere ayrılırsa hatırlanması daha kolay olacaktır.


-> getFullYear()
Yılı döner (4 basamaklı)

-> getMonth()
Ayı döner, 0-11 arasında.

-> getDate()
Ayın gününü döner, 1-31 arasındadır. İsmi aklınızı karıştırabilir.

-> getHours(), getMinutes(), getSeconds(), getMilliseconds()
Sırası ile saat, dakika, saniye ve milisaniye bilgilerini döner.


-> getYear() değil getFullYear()
Çoğu JavaScript motoru standart olmayan getYear() metodunu entegre etmişlerdir. Bu metod kullanımdan kaldırılmıştır. Bazen iki basamaklı yılı dönerler. Bu metodu kullanmayın!. Bunun yerine getFullYear() metodunu kullanabilirsiniz.


Bunlara ek olarak haftanın hangi günü olduğu bilgisi de alınabilir:

-> getDay()
Haftanın gününü, Pazar 0 , Pazartesi 6 olacak şekilde alır. İlk gün her zaman pazardır. Bazı ülkelerde pazar resmi olarak ilk gün olmasa bile bu fonksiyon pazarı yine de ilk gün olarak alır.
Yukarıdaki tüm metodlar değerlerini yerel saate göre dönerler.

Bunun uluslararası saat için eşleri mevcuttur(UTC). Bu metodlar gün, ay, yıl vs değerlerini UTC+0’a göre dönerler: UTC+0 saat dilimi için gün, ay, yıl vb. döndüren UTC-karşıtları da vardır: getUTCFullYear(),getUTCMonth(), getUTCDay(). "get"'ten sonra "UTC" ekleyerek metodlara ulaşmak mümkündür.

Eğer bulunduğunuz saat dilimi UTC+0 dan farklıysa getHours() ve getUTCHours() arasında bir farklılık olacaktır. */

// o anki yerel tarih
let date = new Date();

// yerel saat
console.log(date.getHours()); // 1

// UTC+0'daki yerel saat( Londra kış saati)
console.log(date.getUTCHours()); // 22

// Belirtilen metodlar dışında, UTC tipi olmayan iki tane özel metod bulunmaktadır:


/* -> getTime()
Verilen tarihin zaman damgasını ( timestamp ) döndürür – 1 Ocak 1970 UTC+0’dan itibaren geçen milisaniye


-> getTimezoneOffset()
Yerel zaman ile UTC arasındaki farkı dakika olarak döndürür: */

// Eğer UTC-1'de yaşıyorsanız, çıktısı 60
// Eğer UTC+3'de yaşıyorsanız, çıktısı -180
console.log(new Date().getTimezoneOffset()); // -180