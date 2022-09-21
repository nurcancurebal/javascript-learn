/* -> Çağrılar arasındaki farklar

Yeni bir rabbit1 objesi yaratalım: */

function Rabbit1(name) {

    this.name = name; // this : Rabbit1
}

Rabbit1.prototype.sayHi = function () {

    console.log(this.name); // Rabbit1, undefined, undefined, undefined
};

let rabbit1 = new Rabbit1("Rabbit1");

// Aşağıdaki çağrılar aynı şeyleri yapar mı yapmaz mı?

rabbit1.sayHi(); // rabbit1: Rabbit1 {name: 'Rabbit1'}
Rabbit1.prototype.sayHi();
Object.getPrototypeOf(rabbit1).sayHi(); // Object.getPrototypeOf(obj) – obj'nin [[Prototype]]ını döner ( __proto__ alıcısı (getter) ile aynı işi yapar)).
rabbit1.__proto__.sayHi();

/* İlk çağrı this == rabbit'e sonrakiler ise this eşittir Rabbit.prototype'a olacak çekilde tanımlanmıştır. Daha önce de bahsettiğimiz gibi asıl obje nokta`'dan önceki bölümdür.

Bundan dolayı sadece ilk çağrı Rabbit'i gösterir. Diğerleri ise undefined'dır. */