/* -> Çağrılar arasındaki farklar

Yeni bir rabbit1 objesi yaratalım: */

function Rabbit1(name) {

    this.name = name;
}
Rabbit1.prototype.sayHi = function () {

    console.log(this.name); // Rabbit1, undefined, undefined, undefined
};

let rabbit1 = new Rabbit1("Rabbit1");

// Aşağıdaki çağrılar aynı şeyleri yapar mı yapmaz mı?

rabbit1.sayHi();
Rabbit1.prototype.sayHi();
Object.getPrototypeOf(rabbit1).sayHi();
rabbit1.__proto__.sayHi();

/* çözüm
İlk çağrı this == rabbit'e sonrakiler ise this eşittir Rabbit.prototype'a olacak çekilde tanımlanmıştır. Daha önce de bahsettiğimiz gibi asıl objenokta`'dan önceki bölümdür.

Bundan dolayı sadece ilk çağrı Rabbit'i gösterir. Diğerleri ise undefined'dır. */

function Rabbit(name) {

    this.name = name;
}

Rabbit.prototype.sayHi = function () {

    console.log(this.name);
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined