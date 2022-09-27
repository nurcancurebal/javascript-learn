/* -> Örtük deneme… yakalama
Bir söz yürütücüsünün ve söz işleyicilerinin kodunun try..catchçevresinde "görünmez" vardır. Bir istisna olursa, yakalanır ve reddedilmiş olarak değerlendirilir. */

new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(console.log); // Error: Whoops!

// …Bununla tamamen aynı şekilde çalışır:

new Promise((resolve, reject) => {

    reject(new Error("Whoops!"));

}).catch(console.log); // Error: Whoops!

/* try..catchYürütücünün etrafındaki "görünmez ", hatayı otomatik olarak yakalar ve bunu bir reddetme olarak değerlendirir.

Bu sadece yürütücüde değil, aynı zamanda işleyicilerinde de olur. Bir işleyicinin throwiçindeysek .then, bu reddedilen bir söz anlamına gelir, bu nedenle kontrol en yakın hata işleyicisine atlar. */

new Promise((resolve, reject) => {

    resolve("ok");

}).then((result) => {

    throw new Error("Whoops!"); // sözü reddeder

}).catch(console.log); // Error: Whoops!

// throwBu, yalnızca ifadenin neden olduğu hatalar için değil, tüm hatalar için geçerlidir . Örneğin, bir programlama hatası:

new Promise((resolve, reject) => {

    resolve("ok");

}).then((result) => {

    blabla(); // öyle bir fonksiyon yok

}).catch(console.log); // ReferenceError: blabla is not defined

// Final .catch, yalnızca açık reddetmeleri değil, aynı zamanda yukarıdaki işleyicilerde ara sıra hataları da yakalar.