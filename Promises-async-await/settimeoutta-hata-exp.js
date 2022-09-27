/* -> setTimeout'ta hata
Ne düşünüyorsun? tetikleyecek .catchmi? Cevabını açıkla. */

new Promise(function(resolve, reject) {

  setTimeout(() => {

    throw new Error("Whoops!");
  }, 1000);

}).catch(console.log);

çözüm
Cevap: hayır, olmayacak :

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);
Bölümde söylendiği gibi try..catch, işlev kodunun çevresinde bir "örtük" vardır. Böylece tüm senkron hatalar işlenir.

Ancak burada hata, yürütücü çalışırken değil, daha sonra üretilir. Yani söz bunu kaldıramaz.