/* -> Tüketiciler: then, catch, finally
Promise(Söz objesi) çalıştırıcı(“üretici kod”) ve tüketici arasında bir bağ oluşturur, bu sonuç veya hata objesi bekler. Tüketici fonksiyonlar .then, .catch ve .finally ile kayıt olabilirler. */


/* -> then
En önemli ve temel olan then'dir. */

/* promise.then(
  function(result) { /* başarılı bir sonucu işle */ //},
// function(error) { /* hatayı işle  } );*/

/* .then'in ilk argümanı:

1. Promise sonuca ulaştığında çalışır.
2. Sonucu alır.

İkinci argümanı:

1. Söz reddedildiğinde
2. Hata alır.

Örneğin, aşağıdaki başarılı bir şekilde çözülen söz örneği: */

let promise1 = new Promise(function (resolve, reject) {

  setTimeout(() => resolve("done!"), 1000);
});

// çözüm .then'in ilk fonksiyonunda çalışır.
promise1.then(

  result => console.log(result), //  1 sn sonra "done!" ekrana basılır
  error => console.log(error) // çalışmaz
);

/* İlk fonksiyon çalıştı.

Red durumunda ikincisi çalışır: */

let promise2 = new Promise(function (resolve, reject) {

  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// red .then'in ikinci fonksiyonunda çalışır.
promise2.then(
  result => console.log(result), // çalışmaz
  error => console.log(error) //  "Error: Whoops!" 1 sn sonra ekrana basılır.
);

// Sadece başarılı bir şekilde tamamlanması ile ilgileniyorsanız, .then'e sadece bir tane fonksiyon vermeniz yeterlidir:

let promise3 = new Promise(resolve => {

  setTimeout(() => resolve("done!"), 1000);
});

promise3.then(console.log); // 1 sn sonra "done!" ekrana basılır.


/* -> catch
Sadece hatalar ile ilgileniyorsanız, ilk argüman için null kullanabilirsiniz: .then(null, errorHandlingFunction). Veya .catch(errorHandlingFunction)'da kullanabilirsiniz, bu da şu şekilde olur: */

let promise4 = new Promise((resolve, reject) => {

  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise4.catch(console.log); // 1 sn sonra "Error: Whoops!" ekrana basılır.

// .catch(f) ile .then(null, f) aynı anlama gelmektedir. Birincisi sadece kısa yazım.


/* -> finally
try{...} catch {...}'de finally olduğu gibi sözlerde de finally bulunmaktadır.

.finally(f) çağrısı .then(f,f)'ye benzemektedir. Söz yerine getirildiğinde, ister çözüm veya ret olsun, bu fonksiyon çalışır.

finally temizlik için oldukça iyi bir işleyicidir. Örneğin yükleniyor belirtecinin durdurulması gibi. En nihayetinde olumlu veya olumsuz olarak söz tamamlanmıştır. */

new Promise((resolve, reject) => {

  /* zaman alan bir iş yap ve çözüm/red'i çağır. */
})
// Söz herhangi bir şekilde tamamlandığında çalıştır.
/*   .finally(() => stop loading indicator)
  .then(result => show result, err => show error) */

/* Aslında doğrudan then(f,f) ile aynı diyemeyiz. Bazı önemli farklılıklar bulunmaktadır:

1. finally işleyicisinin argümanı bulunmamaktadır. finally bloğunda sözün başarılı veya başarısız olduğunu bilemeyiz. Bu bir problem değil çünkü en sonunda “genel” bir bitirme prosedürü gerçekleştirmek yeterlidir.

2. finally işleyicisi sonuç veya hata işleyicisine geçirgendir

Örneğin aşağıda finally'den then'e geçmiş bir sonuç görülmektedir: */

new Promise((resolve, reject) => {

  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => console.log("Promise ready"))
  .then(result => console.log(result)); // <-- .then sonuçları işler


// Burada ise sözde bir problem meydana gelmektedir, finally'den catch bloğuna geçmektedir:

new Promise((resolve, reject) => {

  throw new Error("error");
})
  .finally(() => console.log("Promise ready")) //Promise ready
  .catch(err => console.log(err));  // <-- .catch hata objesini işler.

/* Aslında bu çok uygun, çünkü finally içerisinde sözün sonucunu işleme gibi bir niyetimiz yok. Bunları üzerinden geçirse yeterli.


3. finally(f) kullanmak yazım olarak .then(f,f)'den daha uygundur çünkü f fonksiyonunu tekrar yazmanıza gerek kalmaz. */


/* -> Bitmiş sözün işleyicilerini anında çalıştırtırma
Eğer bir söz bekleme durumunda ise .then/catch/finally işleyicileri sonuç için beklerler. Diğer türlü, söz bittiğinde, anında çalıştırılır: */

// anında biten söz
let promise5 = new Promise(resolve => resolve("done!"));

promise5.then(console.log); // done! (hemen görünür)

// .then işleyicisi her türlü çalışır, söz zaman alsa da anında bitse de önemli değil.