/* -> Doğal prototipler
"prototype" özelliği JavaScript çekirdeğinde oldukça fazla kullanılmaktadır. Tüm varsayılan yapıcı fonksiyonlar bunu kullanır.

Önce basit objeler, sonra daha karmaşık olanları için nasıl çalıştığını göreceğiz. */


/* -> Object.prototype
Diyelim ki boş bir objeyi yazdırdınız: */

let obj = {};

console.log(obj); // {}

/* "[object Object]" yazısını oluşturan kod nerede? Bu varsayılan toString metodu, ama asıl soru nerede? bu obj boş!

…Fakat obj = {} ile obj = new Object() aslında aynı anlama gelmektedir. Object object yapıcı fonksiyonudur. Bu fonksiyon Object.prototype'e ki bu da büyük bir toString'e sahip objeye ve diğer fonksiyonlara sahiptir. Tamamı gömülüdür.

new Object() çağrıldığında ( veya {...} ile yaratıldığında ) Objenin [[Prototype]]'i bir önceki bölümde bahsettiğimiz gibi Object.prototype'a ayarlanır.

Sonrasında obj.toString() çaprıldığında – Bu metod Object.prototype'tan alınır.

Bunu şu şekilde kontrol edebiliriz: */

let obj2 = {};

console.log(obj2.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString == Object.prototype.toString

// Object.prototype'ın üstünde başka bir [[Prototype]] yoktur.

console.log(Object.prototype.__proto__); // null