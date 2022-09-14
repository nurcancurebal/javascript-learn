/* Tımarlama? Neden yapılmalı?
Tımarlayarak hem fonksiyon normal olarak çağırılabilir hem de kısmi olarak alınabilir. Yararını anlayabilmek için gerçekten de iyi bir örneğe gerek var.

Örneğin, bir loglama fonksiyonu olsun log(data, importance, message) gelen veriye göre çıktıyı formatlayabilsin. Projelerde böyle fonksiyonlar bunun yanında birçok özelliğe sahip olabilir. Örneğin bunları ağ üzerinden iletmek veya filtrelemek gibi. */

function log(date, importance, message) {

    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
    // [15:38] [DEBUG] some debug, [15:38] [DEBUG] some debug, [15:38] [INFO] message, [15:38] [DEBUG] message
}

// Hadi tımarlayalım!

log = _.curry(log);

// Bu log işleminden sonra hala normal olarak çalışır:

log(new Date(), "DEBUG", "some debug");

// … Bunun yanında tımarlı şekilde çağırılabilir:

log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// Bugünün loglarını daha kolay bir şekilde alabileceğimiz bir fonksiyon yazalım:

// todayLog bugünün değeri sabit olacak şekilde oluşturulmuş bir kısmi fonksiyondur
let todayLog = log(new Date());

// kullanımı
todayLog("INFO", "message");

// Şimdi ise bugünün Debug değerlerini alabileceğimiz diğer bir fonksiyon yapalım:

let todayDebug = todayLog("DEBUG");

todayDebug("message");

/* Sonuç olarak:
1. Tımarladıktan sonra log fonksiyonundan bir şey kaybetmedik. Hala aynı şekilde çağırabiliriz.
2. Kısmi fonksiyonlar ile işimize yarar birçok yeni fonksiyon geliştirebiliriz. */