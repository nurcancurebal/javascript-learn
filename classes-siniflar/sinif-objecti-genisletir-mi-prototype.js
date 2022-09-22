/* -> Sınıf Object'i genişletir mi?

Bildiğiniz gibi objeler Object.prototype'tan kalıtım alır ve “generic” obje metodlarına bu şekilde erişir.

Aşağıda gösterildiği gibi: */

class Rabbit1 {

  constructor(name) {

    this.name = name;
  }
}

let rabbit1 = new Rabbit1("Rab");

// hasOwnProperty yöntemi, Object.prototype'dandır
// rabbit1.__proto__ === Object.prototype

console.log(rabbit1.hasOwnProperty('name')); // true

/* Peki, "class Rabbit1 extends Object" ile "class Rabbit1" aynımıdır, öyleyse neden?

Aşağıdaki kod çalışır mı? */

class Object {

  constructor(name) {

    this.name = name;
  }
}

class Rabbit2 extends Object {

  constructor(name) { // hata! çalışmaz

    this.name = name;
  }
}

let rabbit2 = new Rabbit2("Rab");

console.log(rabbit2.hasOwnProperty('name')); // true

/* Eğer çalışmaz ise çalışır hale getiriniz.

Cevap iki parçadan oluşmaktadır

Birinci bölüm, kolay olan kalıtım yapan sınıf yapıcı metodda super()'i çağırmalıdır. Diğer türlü "this" “tanımsız” olacaktır. */

class Rabbit3 extends Object {

  constructor(name) {

    super(); // kalıtım yapıldığında üst sınıf çağırılmalıdır.

    this.name = name;
  }
}

let rabbit3 = new Rabbit3("Rab");

console.log(rabbit3.hasOwnProperty('name')); // true

/* Fakat henüz bitmedi.

Bu problem düzeltildikten sonra bile, "class Rabbit3 extends Object" ile class Rabbit3 arasında önemli bir fark vardır.

Bildiğiniz gibi “extends” yazımı iki prototip kurar:

1. Yapıcı fonksiyonların "prototype" ları arasında ( metodlar için )
2. Yapıcı fonksiyonların kendileri arasında ( statik metodlar için )
Bizim durumumuzda class Rabbit3 extends Object: */

class Rabbit4 extends Object { }

console.log(Rabbit4.prototype.__proto__ === Object.prototype); // (1) true
console.log(Rabbit4.__proto__ === Object); // (2) true

// anlamına gelir.

// Object'in statik metodlarına Rabbit4 ile şu şekilde erişebiliriz:

class Rabbit5 extends Object { }

// normalde Object.getOwnPropertyNames'i çağırırız.
console.log(Rabbit5.getOwnPropertyNames({ a: 1, b: 2 })); // a,b

/* Eğer extends kullanılmaz ise class Rabbit5 ikinci referansı alamaz.

Aşağıdaki ile karşılaştırabilirsiniz: */

class Rabbit6 { }

console.log(Rabbit6.prototype.__proto__ === Object.prototype); // (1) true
console.log(Rabbit6.__proto__ === Object); // (2) false (!)

// hata, Rabbit6 diye bir fonksiyon bulunmamaktadır.
console.log(Rabbit6.getOwnPropertyNames({ a: 1, b: 2 })); // Hata

// Basit class Rabbit6 için Rabbit6 fonksiyonu aynı prototipe sahiptir.

class Rabbit7 { }

// (2) yerine kullanılır. Rabbit7 için doğrudur. (diğer fonksiyonlar için de)
console.log(Rabbit7.__proto__ === Function.prototype); // true

/* Bu arada Function.prototype'ın “generic” fonksiyonları bulunmaktadır. Bunlar, call, bind vs gibi metodlardır. Her iki durumda da bunlar mevcuttur çünkü Object yapısında varsayılan olarak bulunmaktadır. Object.__proto__ === Function.prototype

Özetlersek: */

/*
class Rabbit  	                                   class Rabbit extends Object
    –	                                            yapıcı metodda super() çağırılmalıdır.
Rabbit.__proto__ === Function.prototype         	Rabbit.__proto__ === Object */