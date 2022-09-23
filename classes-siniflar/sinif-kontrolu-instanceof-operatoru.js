/* -> Sınıf kontrolü: "instanceof"
instanceof operatörü bir objenin belirli bir sınıfa ait olup olmadığını kontrol eder. Kalıtımı da hesaba kadar.

Böyle bir kontrole birçok durumda ihtiyacımız olabilir. Aşağıda polymorphic fonksiyon inşa etmek için, argümanların tipine göre farklı davranış sergileyen bir yapı yer almaktadır. */


/* -> instanceof operatorü
Yazımı şu şekildedir: */

obj instanceof Class

/* Eğer obj'e Class'a aitse true döner. ( Veya Class'tan türüyorsa)

Örneğin: */

class Rabbit1 { }
let rabbit1 = new Rabbit1();

// `Rabbit1` sınıfının bir objesimidir?
console.log(rabbit1 instanceof Rabbit1); // true

// Bu yapıcı fonksiyonlar için de çalışır:

// instead of class
function Rabbit2() { }

console.log(new Rabbit2() instanceof Rabbit2); // true

// …Array gibi gömülü sınıflar için de

let arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

/* Dikkat edin arr ayrıca Object sınıfına da aittir. Çünkü Array prototipi Object'ten kalıtım alır.

instanceof operatörü prototip zincirini kontrol eder. Symbol.hasInstance statik metodu ile daha performanslı yapılabilir.

obj instanceof Class algoritması kabaca aşağıdaki gibi çalışır:

1. Eğer Symbol.hasInstance statik metodu var ise onu kullan. Şu şekilde: */

// canEat yapabilen her şeyi animal1 varsayalım.
class Animal1 {

    static [Symbol.hasInstance](obj) {

        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };

console.log(obj instanceof Animal1); // true , Animal1[Symbol.hasInstance](obj) çağırıldı.

/* 2. Çoğu sınıf Symbol.hasInstance'a sahip değildir. Bu durumda eğer Class.prototype obj'nin bir prototipine zincirde olup olmadığını kontrol eder.

Diğer bir deyişle: */

obj.__proto__ == Class.prototype
obj.__proto__.__proto__ == Class.prototype
obj.__proto__.__proto__.__proto__ == Class.prototype
// ...

/* Yukarıdaki örnekte Rabbit.prototype == rabbit.__proto__, cevabı doğrudan verir.

Kalıtım yönünden ise rabbit üst sınıfın da instanceof’u dur. */

class Animal3 { }
class Rabbit3 extends Animal3 { }

let rabbit3 = new Rabbit3();

console.log(rabbit3 instanceof Animal3); // true

// rabbit3.__proto__ == Rabbit3.prototype
// rabbit3.__proto__.__proto__ == Animal3.prototype (match!)

/* Ayrıca objA.isPrototypeOf(objB) metodu ile eğer objA objB'nin prototip zincirinin herhangi bir yerindeyse true döner. obj instanceof Class şu şekilde de yazılabilir Class.prototype.isPrototypeOf(obj)

Class yapıcısının kendisi bu kontrolde yer almaz, garip değil mi? Sadece Class.prototype ve prototiplerin zinciri önemlidir.

Bu prototip değiştiğinde farklı sonuçlara yol açabilir.

Aşağıdaki gibi: */

function Rabbit4() { }

let rabbit4 = new Rabbit4();

// prototip değişti
Rabbit4.prototype = {};

// ...artık rabbit4 değil!
console.log(rabbit4 instanceof Rabbit4); // false

// Prototip’i değiştirmemeniz ve daha güvenli tutmanız için bir diğer neden daha olmuş oldu.