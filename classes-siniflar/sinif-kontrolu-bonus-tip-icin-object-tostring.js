/* -> Bonus: Tip için Object toString
Bildiğiniz gibi basit objeler karakter dizisine [object Object] şeklinde çevrilir. */

let obj = {};

console.log(obj); // {}
console.log(obj.toString()); // [object Object]

/* Bu toString'i bu şekilde tanımlamalarından dolayıdır. Fakat görünenden daha güçlü bir toString yazmak için gizli özellikler bulunmaktadır. Bunu typeof'un daha genişi ve instanceof'un alternatifi olarak görmek mümkün.

Garip geliyor değilmi. Bakalım neymiş

Şartname, incelendiğinde gömülü gelen toString metodunun objeden çıkarılabileceği ve başka bir değerin kaynağında çalıştırabileceği görülmektedir. Sonucu da bu değere göre gelir.

. Sayı için [object Number]
. Boolean değerler için [object Boolean]
. null için: [object Null]
. undefined için: [object Undefined]
. Diziler için: [object Array]
. …vs (düzenlenebilir).

Bir örnekle gösterelim: */

// kolaylık olması için `toString` metodunu bir değişkene kopyalayalım
let objectToString = Object.prototype.toString;

// Bu hangi tipte?
let arr = [];

console.log(objectToString.call(arr)); // [object Array]

/* Burada call’i kullandık ve Dekoratörler ve iletilme, call/apply bölümünde objectToString fonksiyonunun nasıl this=arr kaynağında kullanılacağı gösterilmişti.

Dahili olarak toString algoritması this'i kontrol eder ve buna denk gelen sonucu döner. Örneğin: */

let s = Object.prototype.toString;

console.log(s.call(123)); // [object Number]
console.log(s.call(null)); // [object Null]
console.log(s.call(console.log)); // [object Function]